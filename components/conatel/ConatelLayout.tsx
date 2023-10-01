import { PropsWithChildren } from 'react'
import Navbar from './Navbar'

export default function ConatelLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <div className='m-10'></div>
    </>
  )
}
