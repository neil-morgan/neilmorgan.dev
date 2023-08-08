"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  oneDark,
  oneLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";

import type { SnippetProps } from "./types";
import { SnippetWrapper, CodeWrapper, LanguageTab } from "./styles";
import { Consumer } from "@/lib/stitches";

export const Snippet = ({ code, language, css }: SnippetProps) => (
  <Consumer>
    {({ colorMode }) => (
      <SnippetWrapper css={css}>
        <LanguageTab>{language}</LanguageTab>
        <CodeWrapper>
          <SyntaxHighlighter
            language={language}
            style={colorMode === "light" ? oneLight : oneDark}
            customStyle={{
              margin: 0,
            }}>
            {code}
          </SyntaxHighlighter>
        </CodeWrapper>
      </SnippetWrapper>
    )}
  </Consumer>
);
