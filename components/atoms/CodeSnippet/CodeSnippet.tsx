"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import type { CodeSnippetProps } from "./types";
import { SnippetWrapper, CodeWrapper, LanguageTab } from "./styles";

export const CodeSnippet = ({ code, language, css }: CodeSnippetProps) => (
  <SnippetWrapper css={css}>
    <LanguageTab>{language}</LanguageTab>
    <CodeWrapper>
      <SyntaxHighlighter
        language={language}
        style={oneDark}
        customStyle={{
          margin: 0,
        }}>
        {code}‰
      </SyntaxHighlighter>
    </CodeWrapper>
  </SnippetWrapper>
);
