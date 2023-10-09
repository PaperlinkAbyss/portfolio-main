export default function getBoard() {
  return Array(8)
    .fill(null)
    .map((_, i) =>
      Array(8)
        .fill(false)
        .map((el, j) => {
          if (i === 1) {
            return { color: 'black', piece: 'pawn' }
          }
          if (i === 6) {
            return { color: 'white', piece: 'pawn' }
          }
          if (i === 0) {
            if (j === 0 || j === 7) {
              return { color: 'black', piece: 'rook' }
            }
            if (j === 1 || j === 6) {
              return { color: 'black', piece: 'knight' }
            }
            if (j === 2 || j === 5) {
              return { color: 'black', piece: 'bishop' }
            }
            if (j === 3) {
              return { color: 'black', piece: 'queen' }
            }
            if (j === 4) {
              return { color: 'black', piece: 'king' }
            }
          }
          if (i === 7) {
            if (j === 0 || j === 7) {
              return { color: 'white', piece: 'rook' }
            }
            if (j === 1 || j === 6) {
              return { color: 'white', piece: 'knight' }
            }
            if (j === 2 || j === 5) {
              return { color: 'white', piece: 'bishop' }
            }
            if (j === 3) {
              return { color: 'white', piece: 'king' }
            }
            if (j === 4) {
              return { color: 'white', piece: 'queen' }
            }
          }
          return false
        }),
    )
}
