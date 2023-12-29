import { Dispatch, SetStateAction } from 'react'
import { ProjectType } from '~/FloatingNav'
import { MainPage } from '~/main-page'
export type Props = {
  currPage: ProjectType['slug']
  setCurrPage: Dispatch<SetStateAction<ProjectType['slug']>>
}

export default function Home({ currPage, setCurrPage }: Props) {
  return (
    <div className='overflox-hidden overflow-hidden '>
      <iframe
        className={`${currPage ? 'h-screen w-screen' : 'hidden'}`}
        src={currPage}
      ></iframe>
      <MainPage setCurrPage={setCurrPage} />
    </div>
  )
}
