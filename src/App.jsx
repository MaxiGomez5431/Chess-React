import { useEffect, useState } from 'react'
import './App.css'
import {createCells} from './functions/createCells'
import {replaceCell} from './functions/replaceCell'
import { Pawn } from './components/pieces/Pawn'
import {DndContext} from '@dnd-kit/core'
import { BoardCell } from './components/BoardCell'

function App() {
  
  const [cells, setCells] = useState()

  useEffect(() => {
    setCells(createCells()) 
  }, [])

  const handleDragOver = (event) => {
    replaceCell(cells, setCells, event)
  }

  return (
    <>
    <DndContext onDragEnd={handleDragOver}>

      <Pawn></Pawn>
      
      <main className='board'>
        
          {
            cells ?
              cells.flat().map(cell => cell)
            : 
              <div>Cargando...</div>
          }
        
      </main>
    </DndContext>
    </>
  )
}

export default App


