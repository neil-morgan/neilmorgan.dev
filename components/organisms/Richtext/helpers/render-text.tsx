import { Fragment } from "react";
import { CodeString } from "@/components/atoms";

export const renderText = (text: string): React.ReactNode[] => {
  const lines = text.split("\n");
  return lines.map((line, index, array) => (
    <Fragment key={`line-${index}`}>
      {line
        .replace(/`([^`]+)`/g, "<code>$1</code>")
        .split(/(<code>.*?<\/code>)/g)
        .map((part, partIndex) =>
          part.startsWith("<code>") && part.endsWith("</code>") ? (
            <CodeString key={partIndex} text={part.replace(/<\/?code>/g, "")} />
          ) : (
            part
          ),
        )}
      {index < array.length - 1 ? <br /> : null}
    </Fragment>
  ));
};
