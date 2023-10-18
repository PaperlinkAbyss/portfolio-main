import { useState } from 'react'
import { Player } from './Piece'
import getPosition from './helpers/getPosition'
export type PieceProps = {
  player: Player
  position: [number, number]
}

export default function Pawn({ player, position }: PieceProps) {
  const [bg, setBg] = useState('#FF0000')
  function onClick() {
    setBg('#00FF00')
  }
  console.log('Color?', position)
  return (
    <div
      className={`text-red-500 ${getPosition(position)} `}
      style={{ background: bg }}
      onClick={onClick}
    >
      {player} pawn
    </div>
  )
}
