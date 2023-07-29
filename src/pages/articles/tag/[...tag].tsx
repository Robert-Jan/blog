import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import { getAllTags, getAllTagsOrderdByCount } from "@/Tags";
import { TagPill } from "@/components/TagPill";
import { Article, getArticlesByTagPaginated, getTotalPagesByTag } from "@/Articles";
import { ArticleTile } from "@/components/article/ArticleTile";

export const getStaticPaths: GetStaticPaths = async () => {
  var paths: { params: { tag: string[] } }[] = [];

  Object.keys(getAllTags()).forEach(function (tag) {
    paths.push({ params: { tag: [tag] } });

    for (let i = 1; i <= getTotalPagesByTag(tag); i++) {
      paths.push({ params: { tag: [tag, i.toString()] } });
    }
  });

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const parts = params!.tag as string[];
  const tag = parts[0];
  const page = parts?.at(1) ?? "1";

  const articles = getArticlesByTagPaginated(tag, parseInt(page));
  const tags = getAllTagsOrderdByCount();

  return {
    props: {
      tag,
      articles,
      tags
    }
  };
};

export default function ArticlesWithTag({
  tag,
  articles,
  tags
}: InferGetStaticPropsType<typeof getStaticProps>): React.ReactNode {
  return (
    <>
      <Head>
        <title>{`Articles about ${tag} · Robert-Jan.dev`}</title>
      </Head>
      <div className="mx-auto pt-12 sm:px-8 lg:px-20">
        <h1 className="w-full text-2xl font-bold leading-loose tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl sm:leading-tight">
          Articles about {tag}
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
