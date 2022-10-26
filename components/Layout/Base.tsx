import Head from 'next/head'
import { Footer } from './Footer'
import { Header } from './Header'

type LayoutProps = {
  children: React.ReactNode
}

export default function Base({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>Blog</title>
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
