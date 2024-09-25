import { BoardCell } from '../components/BoardCell'

export const createCells = () => {
  const cells = {
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
    7: [],
    8: []
  }

  const columns = ["A","B","C","D","E","F","G","H"]
  let row = 8 //SE PUEDE IMPLEMETAR QUE LADO JUEGA con operador ternario y una prop
  let determineCellColor = false

  for (let key in cells) { 
    
    for (let arrIndx = 0; arrIndx < 8; arrIndx++) {

      cells[key][arrIndx] = 
      
      determineCellColor ? 
        <BoardCell
            nombre={`${columns[arrIndx]}${row}`}
            key = {`${columns[arrIndx]}${row}`}
            style ={{
              backgroundColor: "black",
              color: "white"
            }}
        />
        :
        <BoardCell
            nombre={`${columns[arrIndx]}${row}`}
            key = {`${columns[arrIndx]}${row}`}
        />

        determineCellColor = !determineCellColor
    }
    row--
    determineCellColor = !determineCellColor
  }

  return cells
}