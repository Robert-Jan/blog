import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { Article, getArticlesPaginated, getTotalPages } from "@/Articles";
import Head from "next/head";
import { getAllTagsOrderdByCount } from "@/Tags";
import { TagPill } from "@/components/TagPill";
import { ArticleTile } from "@/components/article/ArticleTile";
import { Pagination } from "@/components/Pagination";

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
  const maxPage = getTotalPages();

  const articles = getArticlesPaginated(parseInt(page));
  const tags = getAllTagsOrderdByCount();

  return {
    props: {
      page,
      maxPage,
      articles,
      tags
    }
  };
};

export default function Articles({
  page,
  maxPage,
  articles,
  tags
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  return (
    <>
      <Head>
        <title>Articles · Robert-Jan.dev</title>
        <meta name="robots" content="noindex" />
      </Head>
      <div className="mx-auto px-4 pt-6 sm:px-8 sm:pt-12 lg:px-20">
        <h1 className="w-full text-2xl font-bold leading-tight tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl">
          Latest articles
        </h1>
        <h2 className="w-full text-xl leading-tight tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-xl">
          My ramblings about software
        </h2>
        <div className="mt-8 flex flex-col items-start lg:flex-row">
          <div className="mr-8 flex w-full flex-col gap-y-4 lg:w-2/3">
            {articles.map((article: Article) => (
              <ArticleTile article={article} key={article.Slug} />
            ))}
            <Pagination currentPage={page} maxPage={maxPage} queryName="page" queryLevel={1} />
          </div>
          <div className="w-full lg:w-1/3">
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
