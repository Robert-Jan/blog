import type { InferGetStaticPropsType } from "next";
import { Article, getArticles } from "@/Articles";
import generate from "@/RssFeed";

export const getStaticProps = async () => {
  const articles = getArticles();

  // Generate RSS feeds on build.
  generate(articles);

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
