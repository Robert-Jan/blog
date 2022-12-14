import { Analytics } from '@vercel/analytics/react'
import type { AppProps } from 'next/app'
import '../../tailwind.css'
import Base from '../components/layout/Base'

export default function Blog({ Component, pageProps }: AppProps) {
  return (
    <>
      <Base>
        <Component {...pageProps} />
      </Base>
      <Analytics />
    </>
  )
}
