import Bishop from './Bishop'
import King from './King'
import Knight from './Knight'
import Pawn from './Pawn'
import Queen from './Queen'
import Rook from './Rook'
export type Player = 'white' | 'black'
type Props = {
  color: Player
  piece: 'pawn' | 'king' | 'knight' | 'rook' | 'bishop' | 'queen'
  position: [number, number]
}
export const PieceDictionary = {
  pawn: (color: Player) => <Pawn player={color} />,
  king: (color: Player) => <King player={color} />,
  knight: (color: Player) => <Knight player={color} />,
  rook: (color: Player) => <Rook player={color} />,
  bishop: (color: Player) => <Bishop player={color} />,
  queen: (color: Player) => <Queen player={color} />,
}
export default function Piece({ color, piece, position }: Props) {
  console.log({ PieceDictionary, piece, color })
  return PieceDictionary[piece]?.(color, position) ?? <div>Not found</div>
}
