import { ReactNode, useContext, useState } from 'react';
import '../../styles/components/Board.css'

import { DropzoneContext } from '../../contexts/DropzoneContext';

interface BoardProps{
  name: string,
  children: ReactNode;
}


export function Board({name, children}: BoardProps){
  //Funções da dropzone
  const { dropzoneEnabled } = useContext(DropzoneContext);
  function dragEnter({target}: any){}
  
  function dragOver({target}: any){
    //Quando estiver em cima da zona de drop
    var test = target.children;
    var cards = document.getElementsByClassName('card')
    target.classList.add('over');
    
    if(test[0] === cards[0] || test[0] === cards[1] || test[0] === cards[2] || test.length < 1){
      try {
        const cardDragging = document.querySelector('.isDragging');
        target.classList.add('over');
        target.appendChild(cardDragging);
      } catch (error) {
        //message error
      }
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