import { BoardCell } from '../components/BoardCell'

export const createCells = () => {
  const cells = [[],[],[],[],[],[],[],[]]
  
  const columns = ["A","B","C","D","E","F","G","H"]
  let row = 8 //SE PUEDE IMPLEMETAR QUE LADO JUEGA con operador ternario y una prop
  let determineCellColor = false

  for (let key in cells) { 
    
    for (let arrIndx = 0; arrIndx < 8; arrIndx++) {

      cells[key][arrIndx] = 
      
      determineCellColor ? 
        <BoardCell
            nombre={`${columns[arrIndx]}${row}`}
            key = {`${arrIndx}${row}`}
            id = {`${arrIndx}${key}`}
            style ={{
              backgroundColor: "black",
              color: "white"
            }}
        />
        :
        <BoardCell
            nombre={`${columns[arrIndx]}${row}`}
            key = {`${arrIndx}${row}`}
            id = {`${arrIndx}${key}`}
        />

        determineCellColor = !determineCellColor
    }
    row--
    determineCellColor = !determineCellColor
  }

  return cells
}