import rehypeExternalLinks from "rehype-external-links";
import rehypeImgSize from "rehype-img-size";
import rehypeParse from "rehype-parse";
import rehypeRaw from "rehype-raw";
import rehypeReact from "rehype-react";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { AH2, AH3, AH4, AH5, AH6 } from "@/components/article/ArticleHeadings";
import { Article } from "@/Articles";
import { ArticleImage } from "@/components/article/ArticleImage";
import { ArticlePre } from "@/components/article/ArticlePre";
import { createElement, Fragment } from "react";
import { unified } from "unified";

export async function MarkdownToHTML(article: Article): Promise<String> {
  return String(
    await unified()
      .use(remarkParse)
      .use(remarkGfm)
      .use(remarkRehype, { allowDangerousHtml: true })
      .use(rehypeExternalLinks, { target: "_blank" })
      .use(rehypeImgSize, { dir: "public" })
      .use(rehypeRaw)
      .use(rehypeSlug)
      .use(rehypeStringify)
      .process(article.Content!)
  );
}

export function HTMLToReact(html: string): React.ReactNode {
  return unified()
    .use(rehypeParse, { fragment: true })
    .use(rehypeReact, {
      createElement,
      Fragment,
      components: {
        img: ArticleImage,
        pre: ArticlePre,
        h2: AH2,
        h3: AH3,
        h4: AH4,
        h5: AH5,
        h6: AH6
      }
    })
    .processSync(html).result;
}
