import { useState } from 'react'

type Cell = {
  row: number
  col: number
  size: number
  onClick: () => void
  isChecked: boolean
}
export default function Cell({ row, col, size, onClick, isChecked }: Cell) {
  const [_isChecked, setIsChecked] = useState(isChecked)

  return (
    <mesh
      onClick={() => {
        onClick()
        setIsChecked(true)
        console.log(isChecked)
      }}
      rotation={[0, 0, 0]}
      position={[-600 + row * (size + 1) + 200, -400 + col * (size + 1), 1]}
    >
      <boxGeometry args={[size, size, 0]} />
      <meshBasicMaterial color={isChecked ? 'red' : 'gray'} />
    </mesh>
  )
}
