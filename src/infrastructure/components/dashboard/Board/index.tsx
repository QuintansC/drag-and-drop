import { ReactNode, useContext } from 'react';
import styles from './styles.module.scss'

import { DropzoneContext } from '../../../../utils/contexts/DropzoneContext';

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
    var cards = document.getElementsByClassName(styles.card)
    target.classList.add(styles.over);
    
    if(test[0] === cards[0] || test[0] === cards[1] || test[0] === cards[2] || test.length < 1){
      try {
        const cardDragging = document.querySelector(styles.isDragging);
        target.classList.add(styles.over);
        target.appendChild(cardDragging);
      } catch (error) {
        //message error
      }
    }  
  }
  
  function dragLeave({target}: any){
    //Quando sair do drag
    target.classList.remove(styles.over);
  }

  function drop({target}: any){
    //Quando for dropano na area
    target.classList.remove(styles.over);
  }

  return(
    <div className={styles.board}>
      <h3>{name}</h3>
      <div 
        className={`${styles.dropzone} ${dropzoneEnabled?styles.highlight:null} `}
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