import { useMemo } from 'react'
import Piece from '~/chess/Piece'
import getBoard from './getBoard'

export default function Chess() {
  const board = useMemo(() => getBoard(), [])
  console.log(board)
  ;('bg-black bg-white')
  return (
    <div className='grid-rows-8 grid max-w-lg grid-cols-8 place-content-center'>
      {board.map((el, i) => {
        return el.map((_el, j) => {
          console.log()
          return (
            <div
              key={`${i} ${j}  ${_el?.color}  ${el?.piece}`}
              className={` h-16 w-16 text-red-800`}
            >
              {_el && (
                <Piece
                  color={_el.color}
                  piece={_el.piece}
                />
              )}
              {_el?.piece}
            </div>
          )
        })
      })}
    </div>
  )
}
