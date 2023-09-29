import Link from 'next/link'
import { emailImage, phoneImage, svgFish } from './svg'

export default function Navbar() {
    return (
        <nav className='absolute top-0 z-50 flex flex-col w-full m-0 text-center text-white transition ease-in-out group hover:bg-white hover:text-black'>
            <div className=' relative z-50 flex justify-between border-b-[1px] border-gray-500 text-white'>
                <div className='relative z-50 content-center self-center justify-between inline-block text-white '>
                    <nav role='navigation' className='hidden'>
                        <div id='block relative z-1 select-none	'>
                            <input type='checkbox' className='hidden' />
                            <span></span>
                            <span></span>
                            <span></span>
                            <ul id='menu'>
                                <a>
                                    <li>Offers</li>
                                </a>
                                <a>
                                    <li>Experiences</li>
                                </a>
                                <a>
                                    <li>About us</li>
                                </a>
                            </ul>
                        </div>
                    </nav>
                    <div className='relative inline-block h-4 m-1 ml-2 group-hover:text-black'>
                        <div className='peer'>{phoneImage}</div>
                        <span className="after:content-[' '] color-white top-full left-1/2 z-50 -ml-5 mt-2 hidden rounded-md bg-white p-2 text-center  opacity-0 duration-100 after:absolute after:left-1/4 after:-ml-1 after:border-4 after:border-solid after:border-t-transparent after:border-r-transparent after:border-b-black after:border-l-transparent after:opacity-100 ">
                            900-00-00-00
                        </span>
                    </div>
                    <div className='relative inline-block m-1 email group-hover:text-black'>
                        {emailImage}
                        <span className='absolute top-[110%] left-1/2 z-50 -ml-8 mt-2 hidden rounded-md bg-black p-2 text-center text-white opacity-0'>
                            <a className='link'>z5512345z@gmail.com</a>
                        </span>
                    </div>
                </div>
                <div className='absolute top-0 bottom-0 left-0 right-0 flex flex-row items-center content-center justify-center '>
                    <Link
                        href='/webs/landing-hotel'
                        className='z-10 h-full text-black bg-transparent'
                        id='main'>
                        {svgFish}
                    </Link>
                </div>
                <div className='z-50 flex flex-row self-center group-hover:text-black'>
                    <div className='px-2 py-1 m-2 text-black bg-white border-white cursor-pointer group-hover:bg-black group-hover:text-white'>
                        Book now
                    </div>
                    <div className='hidden'>Book </div>
                </div>
            </div>
            <div className='self-center tracking-widest '>
                <ul className='flex flex-row '>
                    <li
                        className='inline uppercase transition ease-linear delay-75 decoration-0 content-none hover:text-gray-500'
                        id='Ofertas'>
                        Offers
                    </li>
                    <li
                        id='Experiencias inline'
                        className="uppercase transition delay-75 ease-linear before:ml-1 before:mr-1 before:content-['•'] hover:text-gray-500  group-hover:before:text-black">
                        Experiences
                    </li>
                    <li
                        id='Acerca'
                        className="inline uppercase transition delay-75 ease-linear before:ml-1 before:mr-1 before:text-white before:content-['•'] hover:text-gray-500 group-hover:before:text-black ">
                        About us
                    </li>
                </ul>
            </div>
        </nav>
    )
}
