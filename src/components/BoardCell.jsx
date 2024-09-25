import './styles/BoardCell.css'

export function BoardCell({nombre, style}) {
  
  const { setNodeRef } = useDroppable({
    id: 'droppable',
  });
  
  return (
    <>
      <div 
        className="cell"
        style={style}
        ref={setNodeRef}
      >
        {nombre}
      </div>
    </>
  )
}

