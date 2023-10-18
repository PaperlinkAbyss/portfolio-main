import { PieceProps } from './Pawn'

export default function Rook({ player }: PieceProps) {
  // alert
  return <div className='text-red-500'>{player} Rook</div>
}
