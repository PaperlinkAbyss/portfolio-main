import { OrthographicCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useMemo, useState } from 'react'
import Cell from '~/snake/Cell'
import getBoard from '~/snake/getBoard'

export default function Snake() {
  const NUM_ROWS = 50
  const NUM_COLS = 50
  const CELL_SIZE = 15
  const board = useMemo(() => getBoard(NUM_ROWS, NUM_COLS), [])
  const [state, setState] = useState(board)
  function onClick(i: number, j: number) {
    // if (!board) return
    setState((prev) => {
      const newMap = new Map(prev)
      newMap.get('row-' + i).set('col-' + j, false)
      return newMap
    })
    console.log('State:', state)
  }
  return (
    <div className='h-screen w-screen'>
      <Canvas>
        <OrthographicCamera
          makeDefault
          position={[0, 0, 10]}
          args={[0, 0, 0, 0]}
        ></OrthographicCamera>

        <ambientLight intensity={0.1} />
        {Array.from(board.values()).map((el, i) => {
          console.log('Row:', i)
          return Array.from(el.values()).map((el, j) => {
            console.log('Cols:', j)
            return (
              <Cell
                key={`row-${i}-col${j}-${board.get(`row-${i}`).set(`col-${j}`, true)}`}
                onClick={() => onClick(i, j)}
                row={i}
                col={j}
                size={CELL_SIZE}
                isChecked={state.get(`row-${i}`).get(`col-${j}`)}
              />
            )
          })
        })}
        <Cell
          row={1}
          col={2}
          size={CELL_SIZE}
        />
      </Canvas>
    </div>
  )
}
