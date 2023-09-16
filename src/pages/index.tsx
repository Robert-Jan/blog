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
    <>
      HOME
      {articles.map((article: Article) => (
        <p key={article.Slug}>{article.Title}</p>
      ))}
    </>
  );
}
