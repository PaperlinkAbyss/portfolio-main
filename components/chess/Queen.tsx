import { PieceProps } from './Pawn'

export default function Queen({ player }: PieceProps) {
  return <div className='text-red-500'>{player} Queen</div>
}
