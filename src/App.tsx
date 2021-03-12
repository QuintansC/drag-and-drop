import { useEffect, useState } from 'react';
import {Board} from './components/Board';
import {Cards} from './components/Cards';
import { NavComponents } from './components/NavComponents';
import './styles/App.css';
function App() {
  //App não tem mais estados
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  


  useEffect(()=>{
    setTimeout(()=>{
      setSeconds(seconds + 1);
    }, 1000);
  }, [seconds]);
  
  if(seconds === 60){
    setMinutes(minutes + 1);
    setSeconds(0);
  }

  if(minutes === 60){
    setHours(minutes + 1);
    setMinutes(0);
  }
  return (
    <div className="cont">
      <NavComponents/>
      <div className="boards">

        <Board name="To Do">
          <Cards hourInit={seconds} hourEnd={90} color="red" content="Terminar a aplicação"/>
        </Board> 

        <Board name="In progress">
          <Cards hourInit={minutes} hourEnd={90} color="blue" content="Programando a aplicação"/>
        </Board> 

        <Board name="Done">
          <Cards hourInit={hours} hourEnd={90} color="green" content="Aplicação final"/>
        </Board>
      </div>
    </div>
  );
}

export default App;
