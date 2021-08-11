import { useEffect, useState, useContext } from 'react';
import { Board } from './Board';
import { Cards } from './Cards';
import { NavComponents } from './NavComponents';
import '../../styles/App.css';
import { DropzoneContext } from '../../contexts/DropzoneContext';

function Dashboard(props: any){ 
  const { token } = useContext(DropzoneContext);
  //Estados necessarios para a dashboard
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  useEffect(()=>{
    setTimeout(()=>{
      setSeconds(seconds + 1);
    }, 1000);
  }, [seconds]);
  
  if(seconds >= 60){
    setMinutes(minutes + 1);
    setSeconds(0);
  }

  if(minutes >= 60){
    setHours(hours + 1);
    setMinutes(0);
  }

  if(token !== ''){
    return (
      <div className="cont">
        <NavComponents/>
        <div className="boards">

          <Board name="To Do">
            <Cards hora={{hours, minutes, seconds}} color="red" content="Terminar a aplicação"/>
          </Board> 

          <Board name="In progress">
            <Cards hora={{hours, minutes, seconds}} color="blue" content="Programando a aplicação"/>
          </Board> 

          <Board name="Done">
            <Cards hora={{hours, minutes, seconds}} color="green" content="Aplicação final"/>
          </Board>
        </div>
      </div>
    );
  }else{
    return (
      <div>
        {props.history.push('/')}
      </div>
    )
  }
}

export default Dashboard;