import './styles/BoardCell.css'
import { useDroppable } from '@dnd-kit/core';

export function BoardCell({cellName, id, style, children}) {
  
  const { setNodeRef } = useDroppable({
    id: id,
    data: {column: Number(id[0]), row: Number(id[1]), cellName, style} // podemos usar estos datos para pasar style y nombre al event.over.data para poder crear una replica de la celda
  });
  
  return (
    <>
      <div 
        className="cell"
        style={style}
        ref={setNodeRef}
      >
        {cellName}
        {children}
      </div>
    </>
  )
}

