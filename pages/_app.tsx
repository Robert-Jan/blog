import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import '../resources/style.css'

export default function Blog({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
