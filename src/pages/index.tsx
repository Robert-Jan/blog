import type { InferGetStaticPropsType } from "next";
import { getArticles } from "@/Articles";
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
      <div className="w-full lg:w-2/3">
        <svg xmlns="http://www.w3.org/2000/svg" width="0" height="0">
          <defs>
            <linearGradient id="gradient" x1="80.86%" x2="19.14%" y1="0%" y2="100%">
              <stop offset="0%" stop-color="#CA8A04" />
              <stop offset="100%" stop-color="#EA4798" />
            </linearGradient>
          </defs>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="h-32">
          <path
            style={{ fill: "url(#gradient)" }}
            d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3l89.3 89.4-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"
          />
        </svg>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl sm:leading-tight">
          My ramblings about software
        </h1>
        <p className="pt-3 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
          I’ve loved making things for as long as I can remember, and wrote my first program when I
          was 6 years old, just two weeks after my mom brought home the brand new Macintosh LC 550
          that I taught myself to type on.
        </p>
        <div className="mt-6 flex gap-6">
          <a
            className="group -m-1 p-1"
            aria-label="Follow on GitHub"
            href="https://github.com/Robert-Jan"
            target="_blank">
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z"></path>
            </svg>
          </a>
          <a
            className="group -m-1 p-1"
            aria-label="Follow on LinkedIn"
            href="https://www.linkedin.com/in/robert-jan/"
            target="_blank">
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300">
              <path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z"></path>
            </svg>
          </a>
          <a
            className="group -m-1 p-1"
            aria-label="Follow on Twitter"
            href="https://twitter.com/R0B3RT_J4N"
            target="_blank">
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300">
              <path d="M20.055 7.983c.011.174.011.347.011.523 0 5.338-3.92 11.494-11.09 11.494v-.003A10.755 10.755 0 0 1 3 18.186c.308.038.618.057.928.058a7.655 7.655 0 0 0 4.841-1.733c-1.668-.032-3.13-1.16-3.642-2.805a3.753 3.753 0 0 0 1.76-.07C5.07 13.256 3.76 11.6 3.76 9.676v-.05a3.77 3.77 0 0 0 1.77.505C3.816 8.945 3.288 6.583 4.322 4.737c1.98 2.524 4.9 4.058 8.034 4.22a4.137 4.137 0 0 1 1.128-3.86A3.807 3.807 0 0 1 19 5.274a7.657 7.657 0 0 0 2.475-.98c-.29.934-.9 1.729-1.713 2.233A7.54 7.54 0 0 0 22 5.89a8.084 8.084 0 0 1-1.945 2.093Z"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
