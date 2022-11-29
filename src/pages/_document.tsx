import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class Blog extends Document {
  render() {
    return (
      <Html className="">
        <Head />
        <body className="bg-zinc-50 antialiased dark:bg-zinc-900 dark:text-slate-100">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
