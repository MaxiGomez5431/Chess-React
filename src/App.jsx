import { useEffect, useState } from 'react'
import './App.css'
import {createCells} from './functions/createCells'
import {replaceCell} from './functions/replaceCell'
import { Pawn } from './components/pieces/Pawn'
import {DndContext} from '@dnd-kit/core'
 //eliminar imports inutiles


//mejorar legibilidad del codigo, sobre todo createCells y replaceCell, no se entiende nada de donde vienen los indices 

function App() {
  
  const [cells, setCells] = useState()

  useEffect(() => {
    setCells(createCells()) 
  }, [])

  const handleDragOver = (event) => {
    // if (pieceCanMove(event)){ 
      replaceCell(cells, setCells, event)
    // }
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


