import Image from 'next/legacy/image'
import GeneralHeader from '../GeneralHeader'

export default function SolucionesMultimedia() {
    return (
        <>
            <div id='soluciones-multimedia'>
                <GeneralHeader>Soluciones multimedia</GeneralHeader>
                <div className='flex-cols'>
                    <div className='grid grid-cols-2 grid-rows-1 font- mb-14 sm:grid-cols-1'>
                        <div className='self-center sm:mb-4'>
                            <h2 className='mb-8 text-4xl'>Megafonía</h2>
                            <ol className='ml-5'>
                                <li className='m-2 list-speaker'>
                                    Megafonía de alarma y evacuación (Bosch
                                    Security)
                                </li>
                                <li className='m-2 list-speaker'>
                                    Gestión de avisos y música ambiental (Bosch
                                    Security)
                                </li>
                                <li className='m-2 list-speaker'>
                                    Soluciones para congresos, sistemas de
                                    debate
                                </li>
                                <li className='m-2 list-speaker'>
                                    Sistemas de transmisión de idiomas
                                    (traducción simultánea)
                                </li>
                            </ol>
                        </div>
                        <Image
                            src='/multimedia-1.jpg'
                            width='480'
                            height='320'
                        />
                    </div>
                </div>
                <div className=''>
                    <div className=' grid grid-cols-2 bg-[#e5e7f3] p-8 sm:grid-cols-1'>
                        <Image
                            src='/multimedia-2.jpg'
                            width='480'
                            height='400'
                        />
                        <div className='ml-8'>
                            <h2 className='mb-8 text-4xl sm:mt-4'>
                                Comunicación audiovisual
                            </h2>
                            <ol className='ml-5'>
                                <li className='m-2 list-tick'>
                                    Proyectores de video, pantallas de
                                    proyección
                                </li>
                                <li className='m-2 list-tick'>
                                    Pizarras interactivas
                                </li>
                                <li className='m-2 list-tick'>
                                    Pantallas de led, sistemas de videowall
                                </li>
                                <li className='m-2 list-tick'>
                                    Monitores interactivos y software
                                </li>
                                <li className='m-2 list-tick'>
                                    Visualizadores de objetos y documentos
                                </li>
                                <li className='m-2 list-tick'>
                                    Mobiliario audiovisual
                                </li>
                                <li className='m-2 list-tick'>
                                    Videoconferencia (Polycom)
                                </li>
                                <li className='m-2 list-tick'>
                                    Cartelería digital
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
