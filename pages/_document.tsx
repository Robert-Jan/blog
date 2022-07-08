import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class Blog extends Document {
  render() {
    return (
      <Html className="">
        <Head />
        <body className={'bg-white dark:bg-black'}>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
