export default function getBoard(rows: number, cols: number) {
  const boardMap = new Map()
  for (let i = 0; i < rows; i++) {
    boardMap.set(`row-${i}`, new Map())
    for (let j = 0; j < cols; j++) {
      boardMap.get(`row-${i}`).set(`col-${j}`, false)
    }
  }
  return boardMap
}
