import { ReactNode, useContext } from 'react';
import './../styles/App.css';

import { DropzoneContext } from '../contexts/DropzoneContext';

interface BoardProps{
  name: string,
  children: ReactNode;
}


export function Board({name, children}: BoardProps){

  const { dropzoneEnabled } = useContext(DropzoneContext);
    function dragEnter(){
        console.log('DropZone: Enter in drop Zone');
      }
    
      function dragOver({target}: any){
        //console.log('DropZone: Over');
        target.classList.add('over');
        try {
          const cardDragging = document.querySelector('.isDragging');
          target.appendChild(cardDragging);
        } catch (error) {
          
        }
        
      }
    
      function dragLeave({target}: any){
        //console.log('DropZone: Leave');
        target.classList.remove('over');
      }
    
      function drop({target}: any){
        //console.log('DropZone: Drop');
        target.classList.remove('over');
      }

    return(
      <div className="board">
        <h3>{name}</h3>
        <div 
            className={`${'dropzone'} ${dropzoneEnabled?'highlight':null} `}
            onDragEnter={dragEnter}
            onDragOver={dragOver}
            onDragLeave={dragLeave}
            onDrop={drop}
        >
            {children}
        </div>
      </div>
    )
}