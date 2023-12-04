import type { InferGetStaticPropsType } from "next";
import { Serie, getSeries } from "@/Series";
import Head from "next/head";
import { SerieTile } from "@/components/SerieTile";

export const getStaticProps = async () => {
  const series = getSeries();

  return {
    props: {
      series
    }
  };
};

export default function Series({
  series
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  return (
    <>
      <Head>
        <title>Series · Robert-Jan.dev</title>
        <meta name="robots" content="noindex" />
      </Head>
      <div className="mx-auto px-4 pt-6 sm:px-8 sm:pt-12 lg:px-20">
        <h1 className="w-full text-2xl font-bold leading-tight tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl">
          Article series
        </h1>
        <h2 className="w-full text-xl leading-tight tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-xl">
          Some topics deserve more parts
        </h2>
        <div className="mt-8 flex w-full items-start gap-y-8">
          {series.map((serie: Serie) => (
            <SerieTile serie={serie} key={serie.Title} />
          ))}
        </div>
      </div>
    </>
  );
}
