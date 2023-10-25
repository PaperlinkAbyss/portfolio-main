import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { ReactElement, ReactNode, useState } from 'react'
import FloatingNav, { projectArray } from '~/FloatingNav'
import '../styles/globals.css'

// eslint-disable-next-line @typescript-eslint/ban-types
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)
  const [currPage, setCurrPage] = useState<keyof (typeof projectArray)[number]['slug']>('')
  return getLayout(
    <>
      <Component
        {...pageProps}
        currPage={currPage}
        setCurrPage={setCurrPage}
      />
      <FloatingNav setCurrPage={setCurrPage} />
    </>,
  )
}
