import { Dispatch, SetStateAction } from 'react'
import { ProjectType, projectArray } from '~/FloatingNav'
export type Props = {
  currPage: ProjectType['slug']
  setCurrPage: Dispatch<SetStateAction<ProjectType['slug']>>
}
export default function Home({ currPage, setCurrPage }: Props) {
  return (
    <>
      <iframe
        className={`${currPage ? 'h-screen w-screen' : 'hidden'}`}
        src={currPage}
      ></iframe>
      <main className='mx-auto mt-3 grid min-w-[500px] max-w-max grid-cols-2 place-content-center p-2 text-center'>
        <article>
          <h2 className='border-b-2 border-r-2 border-gray-600 text-2xl'>Webs</h2>
          <ul>
            <li>
              <div onClick={() => setCurrPage(projectArray[0].slug)}>Conatel</div>
            </li>
            <li>
              <div onClick={() => setCurrPage(projectArray[3].slug)}>Landing hotel</div>
            </li>
            <li>
              <div onClick={() => setCurrPage(projectArray[4].slug)}>Pokedex</div>
            </li>
          </ul>
        </article>
        <article>
          <h2 className='border-b-2 border-gray-600 text-2xl'>Games</h2>
          <ul>
            <li>
              <div onClick={() => setCurrPage(projectArray[1].slug)}>Color picker</div>
            </li>
            <li>
              <div onClick={() => setCurrPage(projectArray[2].slug)}>Tic tac toe</div>
            </li>
            <li>
              <div onClick={() => setCurrPage(projectArray[5].slug)}>Processing</div>
            </li>
          </ul>
        </article>
      </main>
      <h2 className='mb-4 ml-2 mt-8 text-center text-2xl'>Details</h2>
      <section className='ml-2 grid grid-cols-2'>
        <article className='m-2'>
          <h3 className='mb-2 w-max border-b-2 border-black/20 text-xl'>
            <div onClick={() => setCurrPage(projectArray[3].slug)}>Landing hotel:</div>
          </h3>
          <p>
            This landing was actually my very first page I created. I did it along the Pokedex to
            prove someone my level of programming (which was very low since I had only been studying
            it for like 2 months).
          </p>
          <p>
            It was meant to be bigger but I was only given a week to do it, and it was quite
            overwhelming since at the same time I started using TypeScript and Tailwind.
          </p>
        </article>
        <article className='m-2'>
          <h3 className='mb-2 w-max border-b-2 border-black/20 text-xl'>
            <div onClick={() => setCurrPage(projectArray[4].slug)}>Pokedex:</div>
          </h3>
          <p>
            On this project I learned how to use fetch and got my very first (and only) decent
            design. This one was very fun to do because I had never used APIs. There was also a
            problem moving it to this portfolio, since I did it using Redux as per requested by the
            ones who were testing me. Even at that time I felt Redux was overkill for such a small
            page, but I do see the need of taking the state out of react for this one. I will
            probably move the pokemons to a db or try Zustand.
          </p>
        </article>
        <article className='m-2'>
          <h3 className='mb-2 w-max border-b-2 border-black/20 text-xl'>
            <div onClick={() => setCurrPage(projectArray[5].slug)}>Processing:</div>
          </h3>
          <p>
            This page is more like a &quot;game&quot; but it&apos;s actually neither a game or a
            web. This project was born from a necessity of a friend. She was meant to create some
            kind of art for an exposition (
            <a
              className='underline'
              href='https://www.diariodenavarra.es/noticias/cultura-ocio/cultura/2022/04/29/el-palacio-condestable-acoge-exposicion-homenaje-artista-profesor-pamplones-jabi-villarreal-525696-1034.html'
            >
              this one
            </a>
            ) in honor of her deceased art teacher Jabier Villarreal. She decided to do an
            embroidery proyect but wanted to mix traditional basque art (basque embroidery patterns)
            with modern technologies. So she ended up doing it on processing, however it was quite
            tedious since she had never studied programming before and needed to create 625 tiles
            per canvas. At that moment I decided to make it a little bit more automatic with some
            loops. I was going to give it some extra styling so it wasn&apos;t as ugly but she told
            me not to (blame her).
          </p>
          <p>
            Creating this app was quite weird because I didn&apos;t opt to make it 100% in the react
            way, the main reason being the opposite of the Pokedex, the state would be so big
            it&apos;s probably gonna be very bad for performance.
          </p>
        </article>
        <article className='m-2'>
          <h3 className='mb-2 w-max border-b-2 border-black/20 text-xl'>
            <div onClick={() => setCurrPage(projectArray[0].slug)}>Conatel:</div>
          </h3>
          <p>
            My very first page done from 0 with styling. It&apos;s a very simple copy of the
            original (
            <a
              className='underline'
              href='https://conatel.biz'
            >
              conatel.biz
            </a>
            ). I finished a programming course and got in this business for practices (80h, 4h a day
            for 4 weeks). They used wordpress and didn&apos;t need much from me so by the second day
            I already finished upgrading things and had free time so I decided to copy their whole
            page, changing some styling and grouping things differently. I also ended up adding some
            more features that didn&apos;t get into my copy (mainly Área privada). They were very
            nice and I had a lot of fun with them, they even allowed me to publish it here as my
            portfolio so I&apos;m very thankful.
          </p>
        </article>
        <article className='m-2'>
          <h3 className='mb-2 w-max border-b-2 border-black/20 text-xl'>
            <div onClick={() => setCurrPage(projectArray[1].slug)}>Color picker:</div>
          </h3>
          <p>
            This game was actually something that popped up on my instagram while I was in Conatel.
            It looked very fun to do so I tried. It was quite fast and easy to do, but my mind told
            me: You can make it harder (for no reason) so I did. I added more color spaces, options
            for difficulty... And it was madness at first. But very fun to do in general.
          </p>
        </article>
        <article className='m-2'>
          <h3 className='mb-2 w-max border-b-2 border-black/20 text-xl'>
            <div onClick={() => setCurrPage(projectArray[2].slug)}>Tic tac toe:</div>
          </h3>
          <p>
            I actually limited myself with this one. It was meant to be a 3x3 by default that could
            be expanded to nxn on size. I decided implementing it 3x3 was enough (
            <del className='line-through'>
              but someday probably it will be my next thing to work on.
            </del>
            <ins className='no-underline'>&nbsp;I actually finished it, yay ).</ins>
          </p>
          <p>This project was also done while being on Conatel on my free time.</p>
        </article>
      </section>
    </>
  )
}
