import Image from 'next/legacy/image'
import GeneralHeader from '../GeneralHeader'

export default function Seguridad() {
    return (
        <>
            <div id='soluciones-seguridad'>
                <GeneralHeader>Soluciones de seguridad</GeneralHeader>
                <div>
                    <h2 className='mb-8 text-4xl'>CCTV y Seguridad</h2>
                    <div className='grid grid-cols-2 grid-rows-1 mb-14'>
                        <ol>
                            <li className='m-2 list-tick'>
                                Cámaras IP, analógicas y auto-domo (Bosch,
                                Dahua, Idis, Samsung)
                            </li>
                            <li className='m-2 list-tick'>
                                Equipos de grabación y almacenamiento
                            </li>
                            <li className='m-2 list-tick'>
                                Software de visualización y gestión de CCTV
                            </li>
                            <li className='m-2 list-tick'>
                                Sistemas de detección de incendios, centrales,
                                detectores, pulsadores, módulos de señalización,
                                registrados…
                            </li>
                            <li className='m-2 list-tick'>
                                Detección de intrusión
                            </li>
                            <li className='m-2 list-tick'>
                                Marcado e identificación de productos con ADN
                                sintético
                            </li>
                        </ol>
                        <Image
                            className='mx-auto'
                            src='/seg-1.jpg'
                            height='300'
                            width='300'
                            layout='fixed'
                        />
                    </div>
                </div>
                <div className='grid grid-cols-2 grid-rows-1 bg-[#e5e7f3] p-10'>
                    <Image src='/seg-2.jpg' height='300' width='150' />
                    <div className='pl-8 my-auto'>
                        <h2 className='mb-4 text-4xl'>Gestión de accesos</h2>
                        <ol className=''>
                            <li className='m-2 list-tick'>
                                Control de accesos, control de presencia
                                (Dorlet, Digitek)
                            </li>
                            <li className='m-2 list-tick'>
                                Software de gestión deportiva
                            </li>
                            <li className='m-2 list-tick'>Control horario</li>
                            <li className='m-2 list-tick'>
                                Sistemas de control de aforo
                            </li>
                            <li className='m-2 list-tick'>
                                Tornos y portillos de control de accesos
                            </li>
                            <li className='m-2 list-tick'>
                                Barreras e intercomunicadores
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </>
    )
}
