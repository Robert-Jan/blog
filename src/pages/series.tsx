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
      </Head>
      <div className="mx-auto pt-12 sm:px-8 lg:px-20">
        <h1 className="w-full text-2xl font-bold leading-loose tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl sm:leading-tight">
          Article series
        </h1>
        <h2 className="w-full text-xl leading-loose tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-xl sm:leading-tight">
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
