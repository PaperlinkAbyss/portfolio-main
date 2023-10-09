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
}
const PieceDictionary = {
  pawn: (color: Player) => <Pawn player={color} />,
  king: (color: Player) => <King player={color} />,
  knight: (color: Player) => <Knight player={color} />,
  rook: (color: Player) => <Rook player={color} />,
  bishop: (color: Player) => <Bishop player={color} />,
  queen: (color: Player) => <Queen player={color} />,
}
export default function Piece({ color, piece }: Props) {
  return PieceDictionary[piece] ?? <div>Not found</div>
}
