"use client";

import { styled } from "@/lib/stitches";

export const ListElement = styled("ul", {
  display: "flex",
  flexDirection: "column",
  lineHeight: "1.5",

  variants: {
    format: {
      bullets: {
        "& li": {
          position: "relative",
          paddingLeft: "$6",
          listStyleType: "none",
          fontSize: "$3",

          "&:before": {
            position: "absolute",
            left: "0.3rem",
            top: "0.45rem",
            content: "''",
            height: "0.75rem",
            width: "0.75rem",
            background: "$secondary1",
            borderRadius: "100%",
          },
        },
      },

      numbers: {
        listStyle: "none",
        counterReset: "item",

        "& li": {
          counterIncrement: "item",
          position: "relative",
          paddingLeft: "$6",
          listStyleType: "none",
          fontSize: "$3",

          "&:before": {
            position: "absolute",
            left: "0.4rem",
            top: "-0.1rem",
            content: "counter(item)",
            height: "2rem",
            width: "2rem",
            color: "$secondary1",
            fontSize: "$4",
            fontWeight: "500",
            borderRadius: "100%",
          },
        },
      },
    },
  },
});
