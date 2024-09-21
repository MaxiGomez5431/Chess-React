import './styles/BoardCell.css'

export function BoardCell({nombre, style}) {
  


  return (
    <>
      <div 
        className="cell"
        style={style}
      >
        {nombre}

      </div>
    </>
  )
}

