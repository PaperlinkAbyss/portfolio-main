import { BoardKey, BoardValues } from '~g/getBoard'

type Props = {
  piece: BoardValues
  position: { i: number; j: number }
  board: Map<BoardKey, BoardValues>
}
export default function isOverFriendlyPiece({ piece, position, board }: Props) {
  if (!piece) return false
  const { i, j } = position
  const futurePiece = board.get(`${i}-${j}`)
  if (!futurePiece) return false
  return piece.color === futurePiece.color
}
