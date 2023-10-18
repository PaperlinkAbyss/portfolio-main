import getBoard from '~g/getBoard'
import { PieceDictionary } from './Piece'

export default function movingLogic({
  piece,
  positionI,
  positionJ,
}: {
  piece: keyof typeof PieceDictionary
  positionI: number
  positionJ: number
  board: ReturnType<typeof getBoard>
}) {
  switch (piece) {
    case 'pawn': {
      const possibleMoves = []
      if (positionI === 1 || positionI === 6) {
        //Can advance 2 squares vertically.
      }
      //   possibleMoves.push([i+])
    }
    case 'king':
    case 'knight':
    case 'rook':
    case 'bishop':
    case 'queen':
  }
}
