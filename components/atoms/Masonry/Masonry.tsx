"use client";

import { type PropsWithChildren, Children } from "react";
import { chunk } from "lodash";
import { MasonryContainer } from "./styles";

export const Masonry = ({ children }: PropsWithChildren) => {
  const childrenArray = Children.toArray(children);
  const numColumns = 3;

  const columns = chunk(childrenArray, Math.ceil(childrenArray.length / 3));

  // Manipulate the order of items within each column array
  const rearrangedColumns = columns.map((column, index) => {
    return column.filter((item, idx) => idx % 3 === index);
  });

  console.log(rearrangedColumns);

  return (
    <div className="masonry-layout">
      {rearrangedColumns.map((column, index) => (
        <div key={index} className="column">
          {column.map((item, idx) => (
            <div key={idx} className="item">
              {item}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
