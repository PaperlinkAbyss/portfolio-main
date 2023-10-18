import { PieceDictionary, Player } from '~/chess/Piece'
export type BoardKey = `${number}-${number}`
export type BoardValues =
  | false
  | {
      color: Player
      piece: keyof typeof PieceDictionary
      name: `${keyof typeof PieceDictionary}${number}` | 'king' | 'queen'
      i: number
      j: number
    }

export default function getBoard() {
  const state = new Map<BoardKey, BoardValues>()
  const test = Array(8)
    .fill(null)
    .map((_, i) => {
      return Array(8)
        .fill(false)
        .map((el, j) => {
          if (i === 1) {
            state.set(`${i}-${j}`, { color: 'black', piece: 'pawn', name: `pawn${j}`, i, j })
            return
          }
          if (i === 6) {
            state.set(`${i}-${j}`, { color: 'white', piece: 'pawn', name: `pawn${j}`, i, j })
            return
          }
          if (i === 0) {
            if (j === 0 || j === 7) {
              state.set(`${i}-${j}`, { color: 'black', piece: 'rook', name: `rook${j}`, i, j })
              return
            }
            if (j === 1 || j === 6) {
              state.set(`${i}-${j}`, { color: 'black', piece: 'knight', name: `knight${j}`, i, j })
              return
            }
            if (j === 2 || j === 5) {
              state.set(`${i}-${j}`, { color: 'black', piece: 'bishop', name: `bishop${j}`, i, j })
              return
            }
            if (j === 3) {
              state.set(`${i}-${j}`, { color: 'black', piece: 'queen', name: 'queen', i, j })
              return
            }
            if (j === 4) {
              state.set(`${i}-${j}`, { color: 'black', piece: 'king', name: 'king', i, j })
              return
            }
          }
          if (i === 7) {
            if (j === 0 || j === 7) {
              state.set(`${i}-${j}`, { color: 'white', piece: 'rook', name: `rook${j}`, i, j })
              return
            }

            if (j === 1 || j === 6) {
              state.set(`${i}-${j}`, { color: 'white', piece: 'knight', name: `knight${j}`, i, j })
              return
            }
            if (j === 2 || j === 5) {
              state.set(`${i}-${j}`, { color: 'white', piece: 'bishop', name: `bishop${j}`, i, j })
              return
            }
            if (j === 3) {
              state.set(`${i}-${j}`, { color: 'white', piece: 'king', name: 'king', i, j })
              return
            }
            if (j === 4) {
              state.set(`${i}-${j}`, { color: 'white', piece: 'queen', name: 'queen', i, j })
              return
            }
          }
          state.set(`${i}-${j}`, false)
          return false
        })
    })
  console.log(test)
  return state
}
