import { ReactElement } from 'react'
import HotelLayout from '~/landing-hotel/HotelLayout'
import Main from '~/landing-hotel/Main'
export default function LandingMain() {
  return <Main />
}

LandingMain.getLayout = function getLayout(page: ReactElement) {
  return <HotelLayout>{page}</HotelLayout>
}
