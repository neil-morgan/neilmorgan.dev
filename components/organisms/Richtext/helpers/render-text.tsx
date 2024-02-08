import { Fragment } from "react";
import { CodeString } from "@/components/atoms";

export const renderText = (text: string) => {
  const spans = text.replace(/`([^`]+)`/g, "<span>$1</span>");
  const breaks = spans
    .split("\n")
    .flatMap((line, i, arr) =>
      i < arr.length - 1 ? [line, <br key={`break-${i}`} />] : [line],
    );

  return breaks.map((element, index) => {
    if (typeof element === "string") {
      return (
        <Fragment key={index}>
          {element.split(/(<span>.*?<\/span>)/g).map((part, partIndex) => {
            if (part.startsWith("<span>") && part.endsWith("</span>")) {
              return (
                <CodeString
                  key={`${index}${partIndex}`}
                  text={part.replace(/<\/?span>/g, "")}
                />
              );
            }

            return part;
          })}
        </Fragment>
      );
    } else {
      return element;
    }
  });
};
