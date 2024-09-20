import './styles/BoardCell.css'

export function BoardCell({backGroundColor, color, nombre}) {
  


  return (
    <>
      <div 
        className="cell"
        style={ {backgroundColor: backGroundColor, color: color}}
      >
        {nombre}

      </div>
    </>
  )
}

