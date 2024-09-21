import { useEffect, useState } from 'react'
import './App.css'
import { BoardCell } from './components/BoardCell'

function App() {
  
 const [cells, setCells] = useState()

 useEffect(() => {

  const newCells = {
    A: [],
    B: [],
    C: [],
    D: [],
    E: [],
    F: [],
    G: [],
    H: []
  }

  let determineCellColor = true

  for (let key in newCells) { 

    let row = 8
    
    for (let i = 0; i < 8; i++) {

      newCells[key][i] = 
      
      determineCellColor ? 
        <BoardCell
            nombre={`${key}${i+1}`}
            key = {`${key}${i+1}`}
            style ={{
              backgroundColor: "black",
              color: "white",
              gridRow: row
            }}
        />
        :
        <BoardCell
            nombre={`${key}${i+1}`}
            key = {`${key}${i+1}`}
            style ={{
              gridRow: row
            }}
        />

        determineCellColor = !determineCellColor
        row--
    }
    determineCellColor = !determineCellColor
  }

  setCells(newCells)

 }, [])

  return (
    <>

      <button onClick={() => {console.log()}}></button>

      <main className='board'>

        {
          
          cells ?

          Object.values(cells).flat().map(cell => cell)

          : 

          <div>Cargando...</div>
         
        }

      </main>
    </>
  )
}

export default App
