import Document, { Head, Html, Main, NextScript } from "next/document";

export default class Blog extends Document {
  render(): JSX.Element {
    return (
      <Html className="dark [--scroll-mt:9.875rem] lg:[--scroll-mt:6.3125rem]">
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                try {
                  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark')
                  } else {
                    document.documentElement.classList.remove('dark')
                  }
                } catch (_) {}`
            }}
          />
          {process.env.NODE_ENV == "production" && (
            <script
              async
              src="https://analytics.umami.is/script.js"
              data-website-id="54ed1cb4-7d0d-4d0c-bbfc-93d64c72873b"></script>
          )}
        </Head>
        <body className="overflow-y-scroll bg-zinc-50 dark:bg-zinc-950 dark:text-zinc-50">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
