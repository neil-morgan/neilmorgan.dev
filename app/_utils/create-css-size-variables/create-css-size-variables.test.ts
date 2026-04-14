import { describe, it, expect } from "vitest";

import "@testing-library/jest-dom";
import type { CssSizeConfigType } from "@/app/_styles";

import { createCssSizeVariables } from "./create-css-size-variables";

describe("createCssSizeVariables", () => {
  const defaultSizeConfig: CssSizeConfigType = {
    xs: "0.75rem",
    sm: "1rem",
    md: "1.25rem",
    lg: "1.5rem",
    xl: "2rem",
    "2xl": "2.25rem",
    "3xl": "2.5rem",
    "4xl": "2.75rem",
    "5xl": "3rem",
    "6xl": "3.25rem",
  };

  const customSizeConfig: CssSizeConfigType = {
    xs: "8px",
    sm: "12px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    "2xl": "40px",
    "3xl": "48px",
    "4xl": "56px",
    "5xl": "64px",
    "6xl": "72px",
  };

  describe("size alias inputs", () => {
    it.each([
      ["xs", defaultSizeConfig, "0.75rem"],
      ["sm", defaultSizeConfig, "1rem"],
      ["md", defaultSizeConfig, "1.25rem"],
      ["lg", defaultSizeConfig, "1.5rem"],
      ["xl", defaultSizeConfig, "2rem"],
      ["2xl", defaultSizeConfig, "2.25rem"],
      ["3xl", defaultSizeConfig, "2.5rem"],
      ["4xl", defaultSizeConfig, "2.75rem"],
      ["5xl", defaultSizeConfig, "3rem"],
      ["6xl", defaultSizeConfig, "3.25rem"],
    ] as const)(
      "creates CSS variables for %s with default config",
      (size, config, expected) => {
        expect(createCssSizeVariables(size, config)).toEqual({
          "--size": expected,
        });
      },
    );

    it.each([
      ["xs", customSizeConfig, "8px"],
      ["sm", customSizeConfig, "12px"],
      ["md", customSizeConfig, "16px"],
      ["lg", customSizeConfig, "24px"],
      ["xl", customSizeConfig, "32px"],
      ["2xl", customSizeConfig, "40px"],
      ["3xl", customSizeConfig, "48px"],
      ["4xl", customSizeConfig, "56px"],
      ["5xl", customSizeConfig, "64px"],
      ["6xl", customSizeConfig, "72px"],
    ] as const)(
      "creates CSS variables for %s with custom config",
      (size, config, expected) => {
        expect(createCssSizeVariables(size, config)).toEqual({
          "--size": expected,
        });
      },
    );
  });

  describe("direct CSS value inputs", () => {
    it.each([
      ["1rem", "rem values"],
      ["2.5rem", "rem values"],
      ["0.25rem", "rem values"],
      ["16px", "pixel values"],
      ["24px", "pixel values"],
      ["100px", "pixel values"],
      ["1em", "em values"],
      ["1.5em", "em values"],
      ["100%", "percentage values"],
      ["50%", "percentage values"],
      ["100vw", "viewport units"],
      ["100vh", "viewport units"],
      ["50vmin", "viewport units"],
      ["75vmax", "viewport units"],
      ["2cm", "other CSS units"],
      ["10mm", "other CSS units"],
      ["1in", "other CSS units"],
      ["12pt", "other CSS units"],
      ["1pc", "other CSS units"],
      ["2ex", "other CSS units"],
      ["1ch", "other CSS units"],
      ["1fr", "other CSS units"],
    ] as const)("creates CSS variables for %s (%s)", (input, _description) => {
      expect(createCssSizeVariables(input, defaultSizeConfig)).toEqual({
        "--size": input,
      });
    });
  });

  describe("decimal values", () => {
    it.each([
      ["1.25rem", "decimal rem values"],
      ["0.75rem", "decimal rem values"],
      ["16.5px", "decimal pixel values"],
      ["24.75px", "decimal pixel values"],
      ["33.33%", "decimal percentage values"],
      ["66.67%", "decimal percentage values"],
    ] as const)("handles %s correctly (%s)", (input, _description) => {
      expect(createCssSizeVariables(input, defaultSizeConfig)).toEqual({
        "--size": input,
      });
    });
  });

  describe("negative values", () => {
    it.each([["-1rem"], ["-16px"], ["-2.5em"]] as const)(
      "handles negative values correctly: %s",
      (input) => {
        expect(createCssSizeVariables(input, defaultSizeConfig)).toEqual(
          {
            "--size": input,
          },
        );
      },
    );
  });

  describe("zero values", () => {
    it.each([["0rem"], ["0px"], ["0%"]] as const)(
      "handles zero values correctly: %s",
      (input) => {
        expect(createCssSizeVariables(input, defaultSizeConfig)).toEqual(
          {
            "--size": input,
          },
        );
      },
    );
  });

  describe("return type and structure", () => {
    it("returns object with --size property", () => {
      const result = createCssSizeVariables("1rem", defaultSizeConfig);

      expect(result).toHaveProperty("--size");
      expect(Object.keys(result)).toEqual(["--size"]);
    });

    it("returns React.CSSProperties compatible object", () => {
      const result = createCssSizeVariables("1rem", defaultSizeConfig);

      expect(typeof result).toBe("object");
      expect(result).not.toBeNull();
      expect((result as Record<string, string>)["--size"]).toBeDefined();
    });

    it.each([["1rem"], ["16px"], ["100%"], ["md"]] as const)(
      "always returns string values for CSS properties: %s",
      (size) => {
        const result = createCssSizeVariables(size, defaultSizeConfig);
        expect(typeof (result as Record<string, string>)["--size"]).toBe("string");
      },
    );
  });

  describe("edge cases", () => {
    it.each([
      ["sm", "1rem"],
      ["lg", "2rem"],
    ] as const)("handles partial size configs: %s -> %s", (size, expected) => {
      const partialConfig: CssSizeConfigType = {
        sm: "1rem",
        lg: "2rem",
      };
      expect(createCssSizeVariables(size, partialConfig)).toEqual({
        "--size": expected,
      });
    });

    it.each([["1rem"], ["16px"]] as const)(
      "handles empty size config with direct CSS values: %s",
      (input) => {
        const emptyConfig: CssSizeConfigType = {};
        expect(createCssSizeVariables(input, emptyConfig)).toEqual({
          "--size": input,
        });
      },
    );

    it.each([
      ["xs", "8px"],
      ["sm", "1rem"],
      ["md", "1.5em"],
      ["lg", "10%"],
      ["xl", "2vw"],
    ] as const)(
      "handles mixed unit configurations: %s -> %s",
      (size, expected) => {
        const mixedConfig: CssSizeConfigType = {
          xs: "8px",
          sm: "1rem",
          md: "1.5em",
          lg: "10%",
          xl: "2vw",
        };
        expect(createCssSizeVariables(size, mixedConfig)).toEqual({
          "--size": expected,
        });
      },
    );
  });
});
