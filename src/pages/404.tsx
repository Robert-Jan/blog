import Head from "next/head";

export default function NotFound(): JSX.Element {
  return (
    <>
      <Head>
        <title>Not Found · Robert-Jan.dev</title>
        <meta name="robots" content="noindex" />
      </Head>
      <div className="mx-auto px-4 pt-6 sm:px-8 sm:pt-12 lg:px-20">
        <div className="text-center">
          <p className="text-3xl font-semibold text-yellow-600 sm:text-5xl">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">Page not found</h1>
          <p className="mt-6 text-base leading-7">
            Sorry, we couldn&apos;t find the page you&apos;re looking for.
          </p>
        </div>
      </div>
    </>
  );
}
