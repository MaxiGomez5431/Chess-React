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
    
    for (let i = 0; i < 8; i++) {

      newCells[key][i] = 
      
      determineCellColor ? 
        <BoardCell
            backGroundColor={'black'}
            color={'white'}
            nombre={`${key}${i+1}`}
            key = {`${key}${i+1}`}
        />
        :
        <BoardCell
            backGroundColor={'white'}
            nombre={`${key}${i+1}`}
            key = {`${key}${i+1}`}
        />

        determineCellColor = !determineCellColor
    }
    determineCellColor = !determineCellColor
  }

  setCells(newCells)

 }, [])

  return (
    <>

      <button onClick={() => {console.log(Object.values(cells))}}></button>

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
