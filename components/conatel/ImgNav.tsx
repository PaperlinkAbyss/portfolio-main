import Image from 'next/legacy/image'

type ImgObj = {
    text: string
    imgSrc: string
    href: string
}
export type ImgType = ImgObj[]
export default function ImgNav({ img }: { img: ImgType }) {
    let cols = `grid-cols-${img.length} lg:grid-cols-${
        img.length < 4 ? img.length : 3
    } xl:grid-cols-${img.length} md:grid-cols-${
        img.length < 4 ? img.length : 3
    } sm:hidden xl:grid-cols-${
        img.length < 4 ? img.length : 2
    }  2xl:grid-cols-${img.length < 4 ? img.length : 4}`
    return (
        <div className=''>
            <div
                className={`grid ${cols} mx-1 my-0 mt-16 place-content-center  `}>
                {img.map(({ text, imgSrc, href }) => {
                    return (
                        <a
                            key={href}
                            href={href}
                            className='py-4 m-0 text-center flex-cols px-auto'>
                            <Image
                                className='border-2 border-black rounded-full shadow-md'
                                src={imgSrc}
                                width='150'
                                height={150}
                            />
                            <p className='text-lg font-bold '>{text}</p>
                        </a>
                    )
                })}
            </div>
        </div>
    )
}
