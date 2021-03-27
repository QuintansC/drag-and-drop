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
    //Quando estiver em cima da zona de drop
    target.classList.add('over');
    try {
      const cardDragging = document.querySelector('.isDragging');
      target.appendChild(cardDragging);
    } catch (error) {
      //message error
    }
    
  }
  
  function dragLeave({target}: any){
    //Quando sair do drag
    target.classList.remove('over');
  }

  function drop({target}: any){
    //Quando for dropano na area
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