import { timeStamp } from 'console';
import { useEffect, useState } from 'react';
import {Board} from './components/Board';
import {Cards} from './components/Cards';
import { NavComponents } from './components/NavComponents';
import './styles/App.css';
function App() {
  //App não tem mais estados
  const [time, setTime] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  


  useEffect(()=>{
    setTimeout(()=>{
      setSeconds(seconds + 1);
    }, 1000);

    if(seconds === 60){
      setMinutes(1);
      setSeconds(0);
    }
  }, [seconds]);
 
  return (
    <div className="cont">
      <NavComponents/>
      <div className="boards">

        <Board name="a fazer">
          <Cards hourInit={seconds} hourEnd={90} color="red" content="Terminar a aplicação"/>
        </Board> 

        <Board name="em progresso">
          <Cards hourInit={time} hourEnd={90} color="blue" content="Programando a aplicação"/>
        </Board> 

        <Board name="feito">
          <Cards hourInit={time} hourEnd={90} color="green" content="Aplicação final"/>
        </Board>
      </div>
    </div>
  );
}

export default App;
