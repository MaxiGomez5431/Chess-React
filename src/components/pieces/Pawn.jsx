import '../styles/Pawn.css'
import { useDraggable } from '@dnd-kit/core';

export function Pawn({color}) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: 'pawn',
  });

  const style = {
      transform: `translate3d(${transform?.x || 0}px, ${transform?.y || 0}px, 0)`,
  };
  
  return (
    <>
      <div 
        className="pawn piece"
        style={style}
        ref={setNodeRef} 
        {...listeners} 
        {...attributes}
      >
        ♟
      </div>
    </>
  )
}