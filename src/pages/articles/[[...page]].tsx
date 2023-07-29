import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { Article, getArticlesPaginated, getTotalPages } from "@/Articles";
import Head from "next/head";
import { getAllTagsOrderdByCount } from "@/Tags";
import { TagPill } from "@/components/TagPill";
import { ArticleTile } from "@/components/article/ArticleTile";

export const getStaticPaths: GetStaticPaths = async () => {
  var paths = [{ params: { page: [""] } }];

  for (let i = 1; i <= getTotalPages(); i++) {
    paths.push({ params: { page: [i.toString()] } });
  }

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const parts = params!.page as string[];
  const page = parts?.at(0) ?? "1";

  const articles = getArticlesPaginated(parseInt(page));
  const tags = getAllTagsOrderdByCount();

  return {
    props: {
      articles,
      tags
    }
  };
};

export default function Articles({
  articles,
  tags
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  return (
    <>
      <Head>
        <title>Articles · Robert-Jan.dev</title>
      </Head>
      <div className="mx-auto pt-12 sm:px-8 lg:px-20">
        <h1 className="w-full text-2xl font-bold leading-loose tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl sm:leading-tight">
          My latest articles
        </h1>
        <div className="mt-6 flex items-start">
          <div className="mr-8 flex w-2/3 flex-col gap-y-4">
            {articles.map((article: Article) => (
              <ArticleTile article={article} key={article.Slug} />
            ))}
          </div>
          <div className="w-1/3">
            <h1 className="w-full text-xl font-bold leading-loose tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-xl sm:leading-tight">
              Popular tags:
            </h1>
            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((tag: string) => (
                <TagPill tag={tag} key={tag} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
