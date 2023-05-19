import { HTMLToReact } from "@/TransformMarkdown";
import { useMemo } from "react";

export type ContentProps = {
  html: string;
};

export function Content({ html }: ContentProps): JSX.Element {
  const content = useMemo(() => HTMLToReact(html), [html]);

  return (
    <article className="prose prose-zinc mx-auto max-w-3xl dark:prose-invert">{content}</article>
  );
}
