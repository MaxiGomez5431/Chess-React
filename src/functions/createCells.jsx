import { BoardCell } from '../components/BoardCell'

export const createCells = () => {
  const cells = [[],[],[],[],[],[],[],[]]
  
  const columns = ["A","B","C","D","E","F","G","H"]
  let nameRow = 8 //SE PUEDE IMPLEMETAR QUE LADO JUEGA con operador ternario y una prop
  let determineCellColor = false

  for (let arrRow in cells) { 
    
    for (let arrPosition = 0; arrPosition < 8; arrPosition++) {

      let style = determineCellColor ? {backgroundColor: "black", color: "white"} : {backgroundColor: "white", color: "black"}

      cells[arrRow][arrPosition] = 
      
        <BoardCell
            cellName={`${columns[arrPosition]}${nameRow}`}
            key = {`${arrPosition}${arrRow}`}
            id = {`${arrPosition}${arrRow}`}
            style = {style}
        />

        determineCellColor = !determineCellColor
    }
    nameRow--
    determineCellColor = !determineCellColor
  }

  return cells
}