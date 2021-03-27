import { ReactNode, useContext } from 'react';
import '../../styles/components/Board.css'

import { DropzoneContext } from '../../contexts/DropzoneContext';

interface BoardProps{
  name: string,
  children: ReactNode;
}


export function Board({name, children}: BoardProps){

  //Funções da dropzone
  const { dropzoneEnabled } = useContext(DropzoneContext);
    function dragEnter(){}
    
      function dragOver({target}: any){
        target.classList.add('over');
        try {
          const cardDragging = document.querySelector('.isDragging');
          target.appendChild(cardDragging);
        } catch (error) {
          
        }
        
      }
    
      function dragLeave({target}: any){
        target.classList.remove('over');
      }
    
      function drop({target}: any){
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