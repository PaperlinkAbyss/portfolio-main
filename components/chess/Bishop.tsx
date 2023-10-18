import { PieceProps } from './Pawn'

export default function Bishop({ player }: PieceProps) {
  return <div className='text-red-500'>{player} Bishop</div>
}
