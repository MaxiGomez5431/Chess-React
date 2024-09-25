import { useEffect, useState } from 'react'
import './App.css'
import {createCells} from './functions/createCells'

function App() {
  
 const [cells, setCells] = useState()

 useEffect(() => {

  setCells(createCells())

 }, [])

  return (
    <main className='board'>
      {
        cells ?
          Object.values(cells).flat().map(cell => cell)
        : 
          <div>Cargando...</div>
      }
    </main>
  )
}

export default App
