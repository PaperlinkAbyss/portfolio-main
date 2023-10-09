import { Player } from './Piece'

export default function Pawn({ color }: { color: Player }) {
  return <div className='text-red-500'>{color} Pawn</div>
}
