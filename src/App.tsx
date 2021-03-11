import {Board} from './components/Board';
import {Cards} from './components/Cards';
import { NavComponents } from './components/NavComponents';
import './styles/App.css';
function App() {
  //App não tem mais estados
  return (
    <div className="cont">
      <NavComponents/>
      <div className="boards">

        <Board name="To Do">
          <Cards color="red" content="Teste"/>
        </Board> 

        <Board name="In progress">
          <Cards color="blue" content="Teste1"/>
        </Board> 

        <Board name="Done">
          <Cards color="green" content="Teste1"/>
        </Board>
      </div>
    </div>
  );
}

export default App;
