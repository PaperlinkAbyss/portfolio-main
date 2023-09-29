type Props = {
    children: string
    displaySeparator?: boolean
}

export default function GeneralHeader({
    children,
    displaySeparator = true,
}: Props) {
    const display = displaySeparator ? '' : 'hidden'
    return (
        <>
            <h1 className='self-start w-full my-5 mb-16 text-4xl font-bold text-start '>
                {children}
            </h1>
            <div className={`-mt-5 mb-5 h-10 bg-[#e5e7f3] ${display}`}></div>
        </>
    )
}
