import { ReactNode } from 'react'

type Props = {
  children: string | ReactNode
  displaySeparator?: boolean
}

export default function GeneralHeader({ children, displaySeparator = true }: Props) {
  const display = displaySeparator ? '' : 'hidden'
  return (
    <header>
      <h1 className='my-5 mb-16 w-full self-start text-start text-4xl font-bold '>{children}</h1>
      <div className={`-mt-5 mb-5 h-10 bg-[#e5e7f3] ${display}`}></div>
    </header>
  )
}
