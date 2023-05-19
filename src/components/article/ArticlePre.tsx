import { Fragment, ReactElement, useMemo } from "react";
import hljs from "highlight.js/lib/core";
import csharp from "highlight.js/lib/languages/csharp";
import json from "highlight.js/lib/languages/json";
import "highlight.js/styles/github-dark.css";
import { cn } from "@/Classnames";

hljs.registerLanguage("csharp", csharp);
hljs.registerLanguage("json", json);

export type ArticlePreProps = Pick<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLPreElement>, HTMLPreElement>,
  "children"
>;

export function ArticlePre({ children }: ArticlePreProps): JSX.Element {
  if (!Array.isArray(children) || !children[0]) throw new Error("pre is not a valid code block");

  const codeElements = children[0] as ReactElement<
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
  >;

  const match = /language-(.+)/.exec(codeElements.props.className || "");
  let [language, title, highlights] = match
    ? match[1].split(":")
    : [undefined, undefined, undefined];

  // Check if the language is registerd in highlight.js.
  language = hljs.listLanguages().includes(language ?? "") ? language : undefined;

  // Extract the raw code from the React HTML Elements.
  const code = (codeElements.props.children as string[])[0].trim();

  const lineNumbers = code.split("\n").map((_, index) => index + 1);
  const highlightedLines = parseLineRanges(highlights);

  return (
    <div className="not-prose my-8 rounded-lg bg-zinc-950 text-sm leading-relaxed ring-1 ring-zinc-100 ring-zinc-600/20">
      {title && (
        <div className="rounded-t-md border-b border-zinc-700 bg-zinc-800 px-4 py-2 text-center font-mono text-sm text-zinc-300">
          {title}
        </div>
      )}
      <div className="relative">
        <BackgroundLayer lineNumbers={lineNumbers} highlightedLines={highlightedLines} />
        <pre
          className={cn(
            title && "mt-0 rounded-t-none",
            "absolute top-0 w-full overflow-x-auto p-4"
          )}>
          <CodeLayer language={language}>{code}</CodeLayer>
        </pre>
        {highlightedLines && (
          <FadeOutLayer lineNumbers={lineNumbers} highlightedLines={highlightedLines} />
        )}
      </div>
    </div>
  );
}

type CodeLayerProps = {
  children: string;
  language?: string;
};

function CodeLayer({ children, language }: CodeLayerProps): JSX.Element {
  const highlightedHTML = useMemo(
    () => (language ? hljs.highlight(children, { language }).value : null),
    [children, language]
  );

  return highlightedHTML ? (
    <code className="block text-slate-300" dangerouslySetInnerHTML={{ __html: highlightedHTML }} />
  ) : (
    <code className="block text-slate-300">{children}</code>
  );
}

type AuxiliaryLayerProps = {
  lineNumbers: number[];
  highlightedLines?: Set<number>;
};

function BackgroundLayer({ lineNumbers, highlightedLines }: AuxiliaryLayerProps): JSX.Element {
  return (
    <pre className="pointer-events-none select-none py-4" aria-hidden={true}>
      {lineNumbers.map((ln) => (
        <Fragment key={ln}>
          <span
            className={cn("inline-block w-full", {
              "border-l-4 border-yellow-600 bg-zinc-800": highlightedLines?.has(ln)
            })}>
            {" "}
          </span>
          {"\n"}
        </Fragment>
      ))}
    </pre>
  );
}

function FadeOutLayer({ lineNumbers, highlightedLines }: AuxiliaryLayerProps): JSX.Element {
  return (
    <pre className="pointer-events-none absolute top-0 w-full select-none py-4" aria-hidden={true}>
      {lineNumbers.map((ln) => (
        <Fragment key={ln}>
          <span
            className={cn("inline-block w-full", {
              "bg-zinc-950 bg-opacity-40": !highlightedLines?.has(ln)
            })}>
            {" "}
          </span>
          {"\n"}
        </Fragment>
      ))}
    </pre>
  );
}

function parseLineRanges(lineRanges: string | undefined): Set<number> | undefined {
  if (!lineRanges) return undefined;

  return new Set(
    lineRanges.split(",").flatMap((range) => {
      let [begin, end] = range.trim().split("-");
      if (!end) end = begin;

      let lenght = Math.abs((parseInt(end) + 1 - parseInt(begin)) / 1);
      return Array.from({ length: lenght }, (_, i) => i + parseInt(begin));
    })
  );
}
