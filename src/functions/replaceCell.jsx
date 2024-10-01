import { BoardCell } from "../components/BoardCell"

export const replaceCell = (cells, setCells, event) => {
  let newCells = [... cells]
  const column = event.over.data.current.column
  const row = event.over.data.current.row

  const replaceCell =  
  <BoardCell
    cellName={event.over.data.current.cellName}
    key = {event.over.id}
    id = {event.over.id}
    style ={event.over.data.current.style}
  >
  

  </BoardCell>

  newCells[row][column] = replaceCell
  
  setCells(newCells)
}