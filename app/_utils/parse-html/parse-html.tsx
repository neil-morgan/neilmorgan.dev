import parse from "html-react-parser";
import sanitize from "sanitize-html";

const sanitizeHtml = (html: string): string =>
  sanitize(html, {
    allowedTags: [
      "em",
      "b",
      "br",
      "i",
      "u",
      "sup",
      "sub",
      "strong",
      "span",
      "a",
      "ul",
      "p",
      "li",
      "ol",
      "h5",
      "h4",
      "h3",
      "h2",
      "h1",
      "img",
    ],
    allowedAttributes: {
      "*": ["class"],
      a: ["href", "target", "rel"],
      img: ["src", "width", "height", "title", "alt"],
    },
    disallowedTagsMode: "discard",
  });

export const parseHtml = (html: string, replaceNewLines: boolean = false) =>
  parse(sanitizeHtml(replaceNewLines ? html?.replaceAll("\n", "<br/>") : html));
