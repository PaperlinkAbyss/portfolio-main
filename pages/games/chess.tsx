import { useMemo } from 'react'
import Piece from '~/chess/Piece'
import getBoard from './getBoard'

export default function Chess() {
  const board = useMemo(() => getBoard(), [])

  console.log(board)
  ;('bg-black bg-white')
  return (
    <div className='grid-chess-board my-3 grid place-content-center content-center items-center'>
      {Array.from(board.entries()).map((value) => {
        // if (!value) return null
        const [key, el] = value
        if (!el) return
        console.log({ key, el, value })
        return (
          <Piece
            color={el.color}
            piece={el.piece}
            name={el.name}
            position={key.split('-')}
          />
        )
      })}
    </div>
  )
}
