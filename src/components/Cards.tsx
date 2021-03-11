import { useContext } from 'react';
import { DropzoneContext } from '../contexts/DropzoneContext';
import '../styles/components/Card.css';

interface CardProps{
    color: string,
    content: string,
}


export function Cards (props: CardProps){
    const { enableDropzone, disableDropzone} = useContext(DropzoneContext);

    function dragstart({target} :any){
        //console.log('Card: start Drag'); 
        enableDropzone();
        target.classList.add('isDragging');
      }
    
      function drag(){
        //console.log('Card: is Dragging');
      }
    
      function dragend({target}: any){
        //console.log('Card: end Drag');
        disableDropzone();
        target.classList.remove('isDragging');
      }
    

    return(
        <div 
            className="card" 
            draggable="true"
            onDragStart={dragstart}
            onDrag={drag}
            onDragEnd={dragend}
          >
            <div className={`${'status'} ${props.color}`}></div>
            <div className="content">{props.content}</div>
          </div>
    );
}