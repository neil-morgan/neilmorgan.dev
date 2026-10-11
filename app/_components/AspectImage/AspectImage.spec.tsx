import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { AspectImage } from "./AspectImage";

afterEach(cleanup);

describe("AspectImage", () => {
  it("marks a linked transparent image as loaded after a successful load", async () => {
    render(<AspectImage url="/logo.png" description="Logo" href="/blog" />);
    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("data-loaded", "false");
    Object.defineProperty(image, "naturalWidth", { value: 100 });

    fireEvent.load(image);

    await waitFor(() => expect(image).toHaveAttribute("data-loaded", "true"));
  });

  it("keeps the placeholder when the image fails to load", () => {
    render(<AspectImage url="/missing.png" description="Missing" />);
    const image = screen.getByRole("img");

    fireEvent.error(image);

    expect(image).toHaveAttribute("data-loaded", "false");
  });

  it("resets the placeholder when the image URL changes", async () => {
    const { rerender } = render(
      <AspectImage url="/logo.png" description="Logo" />,
    );
    const image = screen.getByRole("img");
    Object.defineProperty(image, "naturalWidth", { value: 100 });
    fireEvent.load(image);
    await waitFor(() => expect(image).toHaveAttribute("data-loaded", "true"));

    rerender(<AspectImage url="/replacement.png" description="Replacement" />);

    expect(screen.getByRole("img")).toHaveAttribute("data-loaded", "false");
  });

  it("centers the rocket focal point in a square cover crop", () => {
    render(
      <AspectImage
        url="/rocket.jpg"
        description="Rocket"
        fit="cover"
        sourceSize={{ width: 3840, height: 2160 }}
        focalPoint={{ focalPoint: { x: 2721, y: 992 } }}
      />,
    );
    const image = screen.getByRole("img");
    expect(image).toHaveStyle({ objectFit: "cover" });
    const position = image.style.objectPosition.split(" ").map(parseFloat);
    expect(position[0]).toBeCloseTo(97.678571);
    expect(position[1]).toBe(50);
    const renderedWidth = 96 * (3840 / 2160);
    const focalX = (2721 / 3840) * renderedWidth;
    const cropOffset = (renderedWidth - 96) * (position[0] / 100);
    expect(focalX - cropOffset).toBeCloseTo(48);
  });

  it.each([
    {
      width: 400,
      height: 200,
      ratio: 1,
      point: { x: 0.75, y: 0.25 },
      position: "100% 50%",
    },
    {
      width: 200,
      height: 400,
      ratio: 1,
      point: { x: 0.5, y: 0.75 },
      position: "50% 100%",
    },
    {
      width: 400,
      height: 200,
      ratio: 3,
      point: { x: 0.75, y: 0.25 },
      position: "50% 0%",
    },
    {
      width: 400,
      height: 200,
      ratio: 2,
      point: { x: 0.75, y: 0.25 },
      position: "50% 50%",
    },
    {
      width: 400,
      height: 200,
      ratio: 1,
      point: { x: 0, y: 1 },
      position: "0% 50%",
    },
    {
      width: 400,
      height: 200,
      ratio: 1,
      point: { x: 1, y: 0 },
      position: "100% 50%",
    },
    {
      width: 400,
      height: 200,
      ratio: 1,
      point: { x: 0.5, y: 0.5 },
      position: "50% 50%",
    },
  ])(
    "centers or clamps $width x $height into ratio $ratio: $position",
    ({ width, height, ratio, point, position }) => {
      render(
        <AspectImage
          url="/rocket.jpg"
          description="Rocket"
          fit="cover"
          ratio={ratio}
          sourceSize={{ width, height }}
          focalPoint={{
            focalPoint: { x: point.x * width, y: point.y * height },
          }}
        />,
      );
      expect(screen.getByRole("img")).toHaveStyle({ objectPosition: position });
    },
  );

  it("requires source dimensions for focal-point cover cropping", () => {
    expect(() =>
      render(
        <AspectImage
          url="/rocket.jpg"
          description="Rocket"
          fit="cover"
          focalPoint={{ focalPoint: { x: 100, y: 100 } }}
        />,
      ),
    ).toThrow("positive asset dimensions required");
  });

  it("keeps contain and the browser's centered position by default", () => {
    render(<AspectImage url="/logo.jpg" description="Logo" />);
    expect(screen.getByRole("img")).toHaveStyle({ objectFit: "contain" });
    expect(screen.getByRole("img").style.objectPosition).toBe("");
  });

  it("validates raw CMS coordinates inside the component", () => {
    expect(() =>
      render(
        <AspectImage
          url="/rocket.jpg"
          description="Rocket"
          fit="cover"
          sourceSize={{ width: 400, height: 200 }}
          focalPoint={{ focalPoint: { x: 401, y: 100 } }}
        />,
      ),
    ).toThrow("coordinates exceed asset bounds");
  });

  it("preserves the centered default for a null CMS focal point", () => {
    render(
      <AspectImage
        url="/rocket.jpg"
        description="Rocket"
        fit="cover"
        focalPoint={null}
      />,
    );
    expect(screen.getByRole("img").style.objectPosition).toBe("");
  });

  it("preserves contain, links, loading and edge focal points", () => {
    render(
      <AspectImage
        url="/logo.jpg"
        description="Logo"
        fit="contain"
        href="/blog"
        loading="eager"
        sourceSize={{ width: 400, height: 200 }}
        focalPoint={{ focalPoint: { x: 0, y: 200 } }}
      />,
    );
    expect(screen.getByRole("img")).toHaveStyle({
      objectFit: "contain",
      objectPosition: "0% 100%",
    });
    expect(screen.getByRole("img")).toHaveAttribute("loading", "eager");
    expect(screen.getByRole("link")).toHaveAttribute("href", "/blog");
  });
});
