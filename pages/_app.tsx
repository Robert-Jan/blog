import type { AppProps } from 'next/app'
import Base from '../components/Layout/Base'
import '../resources/style.css'

export default function Blog({ Component, pageProps }: AppProps) {
  return (
    <Base>
      <Component {...pageProps} />
    </Base>
  )
}
