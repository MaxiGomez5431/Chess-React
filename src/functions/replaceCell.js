export const replaceCell = (cells, setCells, event) => {
  let newCells = [... cells]
  const column = Number(event.over.id[0])
  const row = Number(event.over.id[1])
  const newCell =  0

  console.log(event)
  console.log(column)
  console.log(row)
  console.log(newCells)
  
  newCells[row].splice(column, 1, newCell)
  
  setCells(newCells)
}