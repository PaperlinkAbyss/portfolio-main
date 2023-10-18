import { PieceProps } from './Pawn'

export default function King({ player }: PieceProps) {
  return <div className='text-red-500'>{player} King</div>
}
