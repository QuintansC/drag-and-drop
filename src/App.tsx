import { useState } from 'react';
import {Board} from './components/Board';
import {Cards} from './components/Cards';

function App() {

  return (
    <div className="boards">
      <Board name="Teste">
        <Cards color="red" content="Teste"/>
      </Board> 

      <Board name="Teste1">
        <Cards color="blue" content="Teste1"/>
      </Board> 

      <Board name="Teste1">
        <Cards color="green" content="Teste1"/>
      </Board>
    </div>
  );
}

export default App;
