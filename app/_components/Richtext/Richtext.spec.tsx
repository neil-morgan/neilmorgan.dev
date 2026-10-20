import { BLOCKS, INLINES, type Document } from "@contentful/rich-text-types";
import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import type { RichtextImageFragment } from "@/app/_graphql/generated";
import imageStyles from "../AspectImage/AspectImage.module.css";
import { LiveRichtext } from "./LiveRichtext";
import { Richtext } from "./Richtext";
import styles from "./Richtext.module.css";
import type { RichtextLinksType, RichtextProps } from "./Richtext.types";

vi.mock("@/app/_components", () => ({
  Components: ({ id }: { id: string }) => (
    <div data-testid={`entry-${id}`}>Embedded entry {id}</div>
  ),
}));

afterEach(cleanup);

type Asset = NonNullable<RichtextLinksType["assets"]["block"][number]>;

const imageAsset: Asset = {
  sys: { id: "photo" },
  url: "/photo.jpg",
  description: "An embedded photograph",
  title: "Photo title",
  contentType: "image/jpeg",
};

const linksWith = (
  assets: RichtextLinksType["assets"]["block"] = [imageAsset],
): RichtextLinksType => ({
  entries: { block: [], inline: [] },
  assets: { block: assets },
});

const documentWith = (...content: Document["content"]): Document => ({
  nodeType: BLOCKS.DOCUMENT,
  data: {},
  content,
});

const embeddedAsset = (id = "photo"): Document["content"][number] => ({
  nodeType: BLOCKS.EMBEDDED_ASSET,
  data: { target: { sys: { id, type: "Link", linkType: "Asset" } } },
  content: [],
});

const imageDocument = documentWith(embeddedAsset());

const entryAsset: NonNullable<RichtextImageFragment["image"]> = {
  url: "/entry-image.jpg",
  description: "Entry image",
  title: "Entry title",
  contentType: "image/jpeg",
  width: 400,
  height: 200,
};

const imageEntry: RichtextImageFragment = {
  __typename: "Image",
  sys: { id: "image-entry" },
  focalPoint: { focalPoint: { x: 300, y: 100 } },
  image: entryAsset,
};

const entryDocument = documentWith({
  nodeType: BLOCKS.EMBEDDED_ENTRY,
  data: { target: { sys: { id: imageEntry.sys.id } } },
  content: [],
});

const linksWithEntry = (
  entry: RichtextImageFragment = imageEntry,
): RichtextLinksType => ({
  entries: { block: [entry], inline: [] },
  assets: { block: [] },
});

describe.each(["Richtext", "LiveRichtext"] as const)(
  "%s embedded images",
  (kind) => {
    const component = (props: RichtextProps) =>
      kind === "Richtext" ? (
        <Richtext {...props} />
      ) : (
        <LiveRichtext
          {...props}
          entries={["block", "inline"].map((id) => ({
            id,
            node: (
              <div key={id} data-testid={`entry-${id}`}>
                Embedded entry {id}
              </div>
            ),
          }))}
        />
      );

    it("renders an Image entry's nested asset and focal point without registry lookup", () => {
      render(
        component({
          json: entryDocument,
          links: linksWithEntry(),
          noPadding: true,
        }),
      );

      const image = screen.getByRole("img", { name: "Entry image" });
      expect(image.getAttribute("src")).toContain("entry-image.jpg");
      expect(image).toHaveStyle({
        objectFit: "cover",
        objectPosition: "100% 50%",
      });
      expect(image.parentElement).toHaveStyle({
        "--aspect-ratio": String((1 + Math.sqrt(5)) / 2),
        "--size": "50rem",
      });
      expect(image.parentElement).toHaveClass(imageStyles.scaleDown);
      expect(image.parentElement).not.toHaveClass(imageStyles.scaleUp);
      expect(image.parentElement?.parentElement).toHaveClass(styles.image);
      expect(image.parentElement?.parentElement).not.toHaveClass(
        styles.padding,
      );
      expect(screen.queryByTestId("entry-image-entry")).not.toBeInTheDocument();
    });

    it("renders inline Image entries from the inline links", () => {
      const links = linksWithEntry();
      links.entries = { block: [], inline: [imageEntry] };
      render(
        component({
          links,
          json: documentWith({
            nodeType: BLOCKS.PARAGRAPH,
            data: {},
            content: [
              {
                nodeType: "text",
                value: "Inline image: ",
                marks: [],
                data: {},
              },
              {
                nodeType: INLINES.EMBEDDED_ENTRY,
                data: { target: { sys: { id: imageEntry.sys.id } } },
                content: [],
              },
            ],
          }),
        }),
      );

      expect(
        screen.getByRole("img", { name: "Entry image" }),
      ).toBeInTheDocument();
    });

    it.each([
      { label: "missing nested asset", entry: { ...imageEntry, image: null } },
      {
        label: "missing URL",
        entry: {
          ...imageEntry,
          image: { ...entryAsset, url: null },
        },
      },
    ])("omits an Image entry with $label", ({ entry }) => {
      const { container } = render(
        component({ json: entryDocument, links: linksWithEntry(entry) }),
      );

      expect(container).toBeEmptyDOMElement();
    });

    it("updates an Image entry's asset and focal point with live link data", () => {
      const { rerender } = render(
        component({ json: entryDocument, links: linksWithEntry() }),
      );
      rerender(
        component({
          json: entryDocument,
          links: linksWithEntry({
            ...imageEntry,
            focalPoint: null,
            image: {
              ...entryAsset,
              url: "/replacement.jpg",
              description: null,
            },
          }),
        }),
      );

      const image = screen.getByRole("img", { name: "Entry title" });
      expect(image.getAttribute("src")).toContain("replacement.jpg");
      expect(image.style.objectPosition).toBe("");
      expect(image).toHaveAttribute("data-loaded", "false");
      expect(screen.getAllByRole("img")).toHaveLength(1);
    });

    it("renders a shrinkable image capped at 50rem with a golden-ratio cover frame", () => {
      render(component({ json: imageDocument, links: linksWith() }));

      const image = screen.getByRole("img", {
        name: imageAsset.description ?? "",
      });
      expect(image.getAttribute("src")).toContain("photo.jpg");
      expect(image).toHaveAttribute("loading", "lazy");
      expect(image).toHaveAttribute("sizes", "(max-width: 800px) 100vw, 800px");
      expect(image).toHaveStyle({ objectFit: "cover" });
      expect(image.style.objectPosition).toBe("");

      const frame = image.parentElement;
      expect(frame).toHaveStyle({
        "--aspect-ratio": String((1 + Math.sqrt(5)) / 2),
        "--size": "50rem",
      });
      expect(frame).toHaveClass(imageStyles.scaleDown);
      expect(frame).not.toHaveClass(imageStyles.scaleUp);
      expect(frame?.parentElement).toHaveClass(styles.image, styles.padding);
    });

    it("resolves multiple images by ID rather than array position", () => {
      render(
        component({
          json: documentWith(embeddedAsset("other"), embeddedAsset()),
          links: linksWith([
            null,
            imageAsset,
            {
              ...imageAsset,
              sys: { id: "other" },
              url: "/other.png",
              description: "Another image",
              contentType: "image/png",
            },
          ]),
        }),
      );

      const images = screen.getAllByRole("img");
      expect(images).toHaveLength(2);
      expect(images[0]).toHaveAttribute("alt", "Another image");
      expect(images[0].getAttribute("src")).toContain("other.png");
      expect(images[1].getAttribute("src")).toContain("photo.jpg");
    });

    it.each([
      {
        description: null,
        title: "Title fallback",
        expected: "Title fallback",
      },
      { description: "", title: "Title fallback", expected: "Title fallback" },
      { description: null, title: null, expected: "" },
    ])(
      "uses accessible alt text: $expected",
      ({ description, title, expected }) => {
        const { container } = render(
          component({
            json: imageDocument,
            links: linksWith([{ ...imageAsset, description, title }]),
          }),
        );

        expect(container.querySelector("img")).toHaveAttribute("alt", expected);
      },
    );

    it.each([
      { label: "missing links", links: undefined },
      { label: "unresolved asset", links: linksWith([]) },
      { label: "null asset", links: linksWith([null]) },
      {
        label: "missing URL",
        links: linksWith([{ ...imageAsset, url: null }]),
      },
      {
        label: "missing content type",
        links: linksWith([{ ...imageAsset, contentType: null }]),
      },
      {
        label: "non-image asset",
        links: linksWith([
          {
            ...imageAsset,
            url: "/document.pdf",
            contentType: "application/pdf",
          },
        ]),
      },
    ])("preserves empty output for $label", ({ links }) => {
      const { container } = render(component({ json: imageDocument, links }));

      expect(container).toBeEmptyDOMElement();
    });

    it("honors noPadding without losing the image width wrapper", () => {
      render(
        component({ json: imageDocument, links: linksWith(), noPadding: true }),
      );

      const wrapper = screen.getByRole("img").parentElement?.parentElement;
      expect(wrapper).toHaveClass(styles.image);
      expect(wrapper).not.toHaveClass(styles.padding);
    });

    it("preserves text, block entries and inline entries alongside an image", () => {
      const links = linksWith();
      links.entries = {
        block: [{ sys: { id: "block" }, __typename: "Section" }],
        inline: [{ sys: { id: "inline" }, __typename: "Section" }],
      };
      render(
        component({
          links,
          json: documentWith(
            {
              nodeType: BLOCKS.PARAGRAPH,
              data: {},
              content: [
                {
                  nodeType: "text",
                  value: "Before the image",
                  marks: [],
                  data: {},
                },
                {
                  nodeType: INLINES.EMBEDDED_ENTRY,
                  data: { target: { sys: { id: "inline" } } },
                  content: [],
                },
              ],
            },
            embeddedAsset(),
            {
              nodeType: BLOCKS.EMBEDDED_ENTRY,
              data: { target: { sys: { id: "block" } } },
              content: [],
            },
          ),
        }),
      );

      expect(screen.getByText("Before the image")).toBeInTheDocument();
      expect(screen.getByTestId("entry-block")).toBeInTheDocument();
      expect(screen.getByTestId("entry-inline")).toBeInTheDocument();
      expect(screen.getByRole("img")).toBeInTheDocument();
    });

    it("updates the image when linked asset data changes", () => {
      const { rerender } = render(
        component({ json: imageDocument, links: linksWith() }),
      );

      rerender(
        component({
          json: imageDocument,
          links: linksWith([
            {
              ...imageAsset,
              url: "/updated.jpg",
              description: "Updated image",
            },
          ]),
        }),
      );

      const image = screen.getByRole("img", { name: "Updated image" });
      expect(image.getAttribute("src")).toContain("updated.jpg");
      expect(image).toHaveAttribute("data-loaded", "false");
      expect(screen.getAllByRole("img")).toHaveLength(1);
    });
  },
);
