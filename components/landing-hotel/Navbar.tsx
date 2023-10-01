import * as Tooltip from '@radix-ui/react-tooltip'
import Link from 'next/link'
import { emailImage, phoneImage, svgFish } from './svg'
export default function Navbar() {
  return (
    <nav className='group absolute top-0 z-50 m-0 flex w-full flex-col text-center text-white transition ease-in-out hover:bg-white hover:text-black'>
      <div className=' relative z-50 flex justify-between border-b-[1px] border-gray-500 text-white'>
        <div className='relative z-50 inline-block content-center justify-between self-center text-white '>
          <nav
            role='navigation'
            className='hidden'
          >
            <div id='block relative z-1 select-none	'>
              <input
                type='checkbox'
                className='hidden'
              />
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
          <div className='relative m-1 ml-2 inline-block h-4 group-hover:text-black'>
            <Tooltip.Provider>
              <Tooltip.Root>
                <Tooltip.Trigger asChild>
                  <div className='text-violet11 hover:bg-violet3 inline-flex h-[35px] w-[35px] items-center justify-center rounded-full  outline-none focus:shadow-[0_0_0_2px] focus:shadow-black'>
                    {phoneImage}
                  </div>
                </Tooltip.Trigger>
                <Tooltip.Portal>
                  <Tooltip.Content
                    className='data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-violet11 z-50 select-none rounded-[4px] bg-white px-[15px] py-[10px] text-[15px] leading-none text-black shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity]'
                    sideOffset={5}
                    side='bottom'
                  >
                    900-00-00-00
                  </Tooltip.Content>
                </Tooltip.Portal>
              </Tooltip.Root>
            </Tooltip.Provider>
          </div>{' '}
          <Tooltip.Provider>
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <div className='text-violet11 hover:bg-violet3 inline-flex h-[35px] w-[35px] items-center justify-center rounded-full outline-none  hover:text-black focus:shadow-[0_0_0_2px] focus:shadow-black group-hover:text-black'>
                  {emailImage}
                </div>
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Content
                  className='data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-violet11 z-50 select-none rounded-[4px] bg-white px-[15px] py-[10px] text-[15px] leading-none text-black shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity] hover:text-white'
                  sideOffset={5}
                  side='bottom'
                >
                  z5512345z@gmail.com
                </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>
          </Tooltip.Provider>
        </div>
        <div className='absolute bottom-0 left-0 right-0 top-0 flex flex-row content-center items-center justify-center '>
          <Link
            href='/webs/landing-hotel'
            className='z-10 h-full bg-transparent text-black'
            id='main'
          >
            {svgFish}
          </Link>
        </div>
        <div className='z-50 flex flex-row self-center group-hover:text-black'>
          <div className='m-2 cursor-pointer border-white bg-white px-2 py-1 text-black group-hover:bg-black group-hover:text-white'>
            Book now
          </div>
          <div className='hidden'>Book </div>
        </div>
      </div>
      <div className='self-center tracking-widest '>
        <ul className='flex flex-row '>
          <li
            className='inline uppercase decoration-0 transition delay-75 ease-linear content-none hover:text-gray-500'
            id='Ofertas'
          >
            Offers
          </li>
          <li
            id='Experiencias inline'
            className="uppercase transition delay-75 ease-linear before:ml-1 before:mr-1 before:content-['•'] hover:text-gray-500  group-hover:before:text-black"
          >
            Experiences
          </li>
          <li
            id='Acerca'
            className="inline uppercase transition delay-75 ease-linear before:ml-1 before:mr-1 before:text-white before:content-['•'] hover:text-gray-500 group-hover:before:text-black "
          >
            About us
          </li>
        </ul>
      </div>
    </nav>
  )
}
