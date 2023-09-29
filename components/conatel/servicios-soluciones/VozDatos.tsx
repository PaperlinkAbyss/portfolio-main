import Image from 'next/legacy/image'
import GeneralHeader from '../GeneralHeader'

export default function VozDatos() {
    return (
        <>
            <div id='solucion-voz-datos'>
                <GeneralHeader>Solución de voz y datos</GeneralHeader>
                <div className='flex-cols'>
                    <div className='grid grid-cols-2 grid-rows-1  mb-14 sm:grid-cols-1'>
                        <div className='self-center'>
                            <p className='mb-8 text-4xl'>
                                Proveedor de servicios de internet ISP
                            </p>
                            <ol className='ml-5 '>
                                <li className='m-2 list-globe'>
                                    Operador de voz y datos
                                </li>
                                <li className='m-2 list-globe'>
                                    Venta de Servicios Telefónicos Fijo y Móvil
                                </li>
                                <li className='m-2 list-globe'>
                                    Proveedor de acceso a Internet Registrado en
                                    la CNMT
                                </li>
                                <li className='m-2 list-globe'>
                                    Alojamiento de dominios web
                                </li>
                            </ol>
                        </div>
                        <Image src='/voz-datos1.jpg' width={480} height={320} />
                    </div>
                    <div className='flex-cols w-full bg-[#e5e7f3] p-14 pb-2 sm:p-4'>
                        <h2 className='mb-10 text-4xl text-center'>
                            Telefonía y Comunicaciones
                        </h2>
                        <div>
                            <ol className='grid items-center grid-cols-3 grid-rows-4 text-center sm:grid-cols-2'>
                                <li className='m-2 list-phone '>
                                    Centrales telefónicas IP, digitales e
                                    hibridas, centralitas virtuales
                                    (Siemens-Unify, Alcatel-Lucent, Panasonic,
                                    Aastra, Yeastar)
                                </li>
                                <li className='m-2 list-phone'>
                                    Teléfonos IP, softphones, teléfonos
                                    digitales y analógicos (Siemens-Unify,
                                    Siemens Gigaset, Yealink, Akuvox, Cisco,
                                    Alcatel-Lucent, Panasonic)
                                </li>
                                <li className='m-2 list-phone'>
                                    Sistemas de telefonía inalámbrica Dect e
                                    IP-Dect (Gigaset Siemens)
                                </li>
                                <li className='m-2 list-phone'>
                                    Soluciones IVR, operadora automática, correo
                                    vocal avanzado, mensajería unificada
                                </li>
                                <li className='m-2 list-phone'>
                                    Equipos de audio conferencia para salas
                                    (Polycom, Konftel). Soluciones Call Center
                                </li>
                                <li className='m-2 list-phone'>
                                    Grabadores de llamadas (VoIP, RDSI y
                                    analógicos), software de gestión de
                                    grabación
                                </li>
                                <li className='m-2 list-phone'>
                                    Software de tarificación empresarial y
                                    hotelero (Char)
                                </li>
                                <li className='m-2 list-phone'>
                                    Porteros automáticos integrados con central
                                    telefónica
                                </li>
                                <li className='m-2 list-phone'>
                                    Comunicaciones Unificadas: integración de
                                    teléfono fijo, extensión móvil, gestión de
                                    conferencias, información de presencia,
                                    mensajería vocal, fax, correo electrónico
                                    colaboración web (Siemens-Unify)
                                </li>
                                <li className='col-start-2 m-2 list-phone'>
                                    Auriculares inalámbricos y accesorios
                                    (Plantronics)
                                </li>
                            </ol>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 mt-14 sm:grid-cols-1'>
                        <div className='self-center'>
                            <h2 className='mb-8 text-4xl'>
                                Networking y Seguridad
                            </h2>
                            <ol className='ml-5 sm:ml-1 sm:pb-4'>
                                <li className='m-2 list-lock sm:m-0'>
                                    Diseño, suministro, instalación y
                                    configuración de electrónica de red
                                    switches, routers y balanceadores (HP,
                                    Cisco, D-link, Netgear, Huawei, DrayTek)
                                </li>
                                <li className='m-2 list-lock sm:m-0'>
                                    Equipamiento Wi-Fi, puntos de acceso para
                                    interior o exterior, controladoras, estudios
                                    de cobertura y radioenlaces (Sonicwall,
                                    Cisco, Engenius, Ubiquiti)
                                </li>
                                <li className='m-2 list-lock sm:m-0'>
                                    Sistemas y servicios de seguridad
                                    (Firewall), seguridad perimetral, antivirus,
                                    antispam, prevención de intrusiones,
                                    antispyware, filtrado de contenidos,
                                    conexiones VPN (Sonicwall, Draytek)
                                </li>
                            </ol>
                        </div>
                        <Image
                            src='/voz-datos2.jpg'
                            layout='responsive'
                            width={480}
                            height={320}
                            className=''
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
