"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  oneDark,
  oneLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { ThemeToggleContext } from "@/lib/stitches";

import type { SnippetProps } from "./types";
import { SnippetWrapper, CodeWrapper, LanguageTab } from "./styles";

export const Snippet = ({ code, language, css }: SnippetProps) => (
  <ThemeToggleContext.Consumer>
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
  </ThemeToggleContext.Consumer>
);
