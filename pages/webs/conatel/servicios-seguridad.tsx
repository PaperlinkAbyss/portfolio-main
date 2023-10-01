import Layout from 'c/ConatelLayout'
import GeneralHeader from 'c/GeneralHeader'
import ImgNav from 'c/ImgNav'
import { seguridad } from 'c/data'
import Residencial from 'c/servicios-soluciones/Residencial'
import Seguridad from 'c/servicios-soluciones/Seguridad'
import { ReactElement } from 'react'

export default function ServiciosSeguridad() {
  return (
    <main className='mx-auto my-0 grid w-[70%] min-w-[70%] max-w-4xl place-content-center lg:w-4/5 md:w-[90%]'>
      <GeneralHeader displaySeparator={false}>Servicios de seguridad</GeneralHeader>
      <ImgNav img={seguridad} />
      <Seguridad />
      <Residencial />
    </main>
  )
}
ServiciosSeguridad.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
