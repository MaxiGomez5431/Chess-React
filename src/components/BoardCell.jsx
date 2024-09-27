import './styles/BoardCell.css'
import { useDroppable } from '@dnd-kit/core';

export function BoardCell({nombre, id, style, children}) {
  
  const { setNodeRef } = useDroppable({
    id: id,
    data: {id, nombre}
  });
  

  return (
    <>
      <div 
        className="cell"
        style={style}
        ref={setNodeRef}
      >
        {nombre}
        {children}
      </div>
    </>
  )
}

