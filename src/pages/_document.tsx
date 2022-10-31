import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class Blog extends Document {
  render() {
    return (
      <Html className="">
        <Head />
        <body className="bg-zinc-50 antialiased dark:bg-slate-900 dark:text-slate-100">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
