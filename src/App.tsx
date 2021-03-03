import { useState } from 'react';
import './App.css';

function App() {
  const [dropzoneEnabled, setDropzoneEnabled] = useState(false);
  const [inDropZone, setInDropZone] = useState();

  function dragstart({target}: any){
    //console.log('Card: start Drag'); 
    setDropzoneEnabled(true);
    target.classList.add('isDragging');
  }

  function drag(){
    //console.log('Card: is Dragging');
  }

  function dragend({target}: any){
    //console.log('Card: end Drag');
    setDropzoneEnabled(false);
    target.classList.remove('isDragging');
  }

  function dragEnter(){
    console.log('DropZone: Enter in drop Zone');
  }

  function dragOver({target}: any){
    //console.log('DropZone: Over');
    target.classList.add('over');

    const cardDragging = document.querySelector('.isDragging');
    target.appendChild(cardDragging);
  }

  function dragLeave({target}: any){
    //console.log('DropZone: Leave');
    target.classList.remove('over');
  }

  function drop({target}: any){
    //console.log('DropZone: Drop');
    target.classList.remove('over');
  }

  return (
    <div className="boards">
      <div className="board">
        <h3>Todo</h3>
        <div 
          className={`${'dropzone'} ${dropzoneEnabled?'highlight':null} `}
          onDragEnter={dragEnter}
          onDragOver={dragOver}
          onDragLeave={dragLeave}
          onDrop={drop}
        >
          <div 
            className="card" 
            draggable="true"
            onDragStart={dragstart}
            onDrag={drag}
            onDragEnd={dragend}
          >
            <div className="status blue"></div>
            <div className="content">Fazer videos!</div>
          </div>
        </div>
      </div>
            
      <div className="board">
        <h3>In Progress</h3>
        <div 
          className={`${'dropzone'} ${dropzoneEnabled?'highlight':null} `}
          onDragEnter={dragEnter}
          onDragOver={dragOver}
          onDragLeave={dragLeave}
          onDrop={drop}
        >
          <div 
            className="card" 
            draggable="true"
            onDragStart={dragstart}
            onDrag={drag}
            onDragEnd={dragend}
          >
            <div className="status green"></div>
            <div className="content">Programando</div>
          </div>
        </div>
      </div>

      <div className="board">
        <h3>Done</h3>
        <div 
          className={`${'dropzone'} ${dropzoneEnabled?'highlight':null} `}
          onDragEnter={dragEnter}
          onDragOver={dragOver}
          onDragLeave={dragLeave}
          onDrop={drop}
        >
          <div 
            className="card" 
            draggable="true"
            onDragStart={dragstart}
            onDrag={drag}
            onDragEnd={dragend}
          >
            <div className="status red"></div>
            <div className="content">Responder Fórum</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
