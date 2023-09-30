import React, { ReactElement, useContext, useRef } from 'react'
import ProcessingLayout, { ColorContext } from '~/processing/ProcessingLayout'
import generateTriangleGrid from '~/processing/generateTriangleGrid'
export default function Triangles() {
  const colorActual = useContext(ColorContext)

  const triangleRef = useRef<HTMLDivElement>(null)
  function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const target = event.target as HTMLDivElement
    if (!target) return
    target.style.fill = colorActual.color
  }

  function draw() {
    if (triangleRef.current) {
      triangleRef.current.innerHTML = generateTriangleGrid()
    }
  }
  return (
    <>
      <div
        ref={triangleRef}
        id='triangle'
        onClick={(event) => handleClick(event)}
      ></div>
      <button onClick={() => draw()}>Click me</button>
    </>
  )
}

Triangles.getLayout = function getLayout(page: ReactElement) {
  return <ProcessingLayout>{page}</ProcessingLayout>
}
