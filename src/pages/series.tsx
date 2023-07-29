import type { InferGetStaticPropsType } from "next";
import { Serie, getSeries } from "@/Series";
import Head from "next/head";

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
      {series.map((serie: Serie) => (
        <p key={serie.Title}>{serie.Title}</p>
      ))}
    </>
  );
}
