import fs from "fs";
import Image from "next/image";
import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import Link from "next/link";
import { getArticle } from "@/Articles";
import { Tag } from "@/Tags";
import { Content } from "@/components/article/Content";
import { MarkdownToHTML } from "@/TransformMarkdown";

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = fs.readdirSync("blog/articles").map((fileName) => ({
    params: { slug: fileName.replace(".md", "") }
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const article = getArticle(params!.slug as string);
  const html = await MarkdownToHTML(article);

  return {
    props: {
      article,
      html
    }
  };
};

export default function Article({
  article,
  html
}: InferGetStaticPropsType<typeof getStaticProps>): React.ReactNode {
  return (
    <>
      <Head>
        <title>{article.Title} · Robert-Jan.dev</title>
      </Head>
      <div className="mx-auto mb-4 mt-12 max-w-3xl">
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl sm:leading-tight">
          {article.Title}
        </h1>
        {article.Tags && (
          <div className="mt-8 flex gap-x-2">
            {article.Tags.map((tag: Tag) => (
              <Link
                href={"/articles/" + encodeURIComponent(tag.Name)}
                key={tag.Name}
                className="group rounded-full border border-zinc-900/5 bg-zinc-100/40 px-4 py-1 text-zinc-500 shadow-md shadow-zinc-800/5 transition hover:text-yellow-500  dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:text-yellow-400 dark:hover:ring-white/20">
                {tag.Name}
                {tag.Version && (
                  <span className="text-zinc-400 transition group-hover:text-yellow-500 dark:text-zinc-600 dark:group-hover:text-yellow-400">
                    {" "}
                    {tag.Version}
                  </span>
                )}
              </Link>
            ))}
          </div>
        )}
      </div>
      {article.Hero && (
        <div className="relative my-12 h-96 w-full overflow-hidden drop-shadow-xl">
          <Image
            src={article.Hero}
            alt="TEST"
            title="TEST"
            className="object-cover dark:brightness-75"
            fill
          />
        </div>
      )}
      <div className="mx-auto my-6 flex max-w-3xl items-center text-base text-zinc-500 dark:text-zinc-400">
        <>
          <time dateTime={article.Date}>
            {new Date(article.Date).toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",
              year: "numeric"
            })}
          </time>
          <span className="px-2">&middot;</span>
          {article.ReadingTime} minute read
        </>
      </div>
      <Content html={html} />
    </>
  );
}
