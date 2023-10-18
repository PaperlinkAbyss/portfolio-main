export default function isInsideBoard({ i, j }: { i: number; j: number }) {
  return i >= 0 && i <= 7 && j >= 0 && j <= 7
}
