import { PropsWithChildren } from 'react'
import FloatingNav from '../FloatingNav'
import Footer from './Footer'
import Navbar from './Navbar'

export default function HotelLayout({ children }: PropsWithChildren) {
  return (
    <>
      <main>
        <Navbar />
        {children}
        <Footer />
        <FloatingNav />
      </main>
    </>
  )
}
