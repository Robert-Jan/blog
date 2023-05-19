import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import { getAllTags, Tag } from "@/Tags";

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Object.keys(getAllTags()).map((tag) => ({
    params: { tag }
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const tag = params!.tag as string;

  return {
    props: {
      tag
    }
  };
};

export default function ArticlesWithTag({
  tag
}: InferGetStaticPropsType<typeof getStaticProps>): React.ReactNode {
  return (
    <>
      <Head>
        <title>Articles about {tag} · Robert-Jan.dev</title>
      </Head>
      Tag: {tag}
    </>
  );
}
