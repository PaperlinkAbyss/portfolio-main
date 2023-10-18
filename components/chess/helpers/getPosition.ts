export default function getPosition(position: [number, number]) {
  if (!position) return
  const [i, j] = position
  return `col-start-${i} row-start-${j}`
}
