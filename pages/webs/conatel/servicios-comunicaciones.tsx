import Layout from 'c/ConatelLayout'
import GeneralHeader from 'c/GeneralHeader'
import ImgNav from 'c/ImgNav'
import { serviciosNav } from 'c/data'
import FibraOpticaCableado from 'c/servicios-soluciones/FibraOpticaCableado'
import SolucionesMultimedia from 'c/servicios-soluciones/SolucionesMultimedia'
import VozDatos from 'c/servicios-soluciones/VozDatos'
import { ReactElement } from 'react'

export default function ServiciosComunicaciones() {
    return (
        <>
            <div className='mx-auto my-0 grid w-[70%] min-w-[70%] max-w-4xl place-content-center lg:w-4/5 md:w-[90%]'>
                <GeneralHeader displaySeparator={false}>
                    Sercicios de comunicaciones
                </GeneralHeader>
                <ImgNav img={serviciosNav} />
                <VozDatos />
                <SolucionesMultimedia />
                <FibraOpticaCableado />
            </div>
        </>
    )
}
ServiciosComunicaciones.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>
}
