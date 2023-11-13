import type { InferGetStaticPropsType } from "next";
import { Article, getArticles } from "@/Articles";
import { rss } from "@/Feeds";

export const getStaticProps = async () => {
  const articles = getArticles();

  // Generate RSS feeds on build.
  rss(articles);

  return {
    props: {
      articles
    }
  };
};

export default function Home({
  articles
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  return (
    <div className="mx-auto px-4 pt-6 sm:px-8 sm:pt-12 lg:px-20">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl sm:leading-tight">
          My ramblings about software
        </h1>
      </div>
    </div>
  );
}
