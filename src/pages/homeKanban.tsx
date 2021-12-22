import { useEffect, useState, useContext } from 'react';
import { Board } from '../components/dashboard/Board';
import { Cards } from '../components/dashboard/Cards';
import { NavComponents } from '../components/dashboard/NavComponents';
import { DropzoneContext } from '../contexts/DropzoneContext';
import styles from '../styles/pages/HomeKanban.module.scss';

function Dashboard(props: any){ 
  const { getToken } = useContext(DropzoneContext);
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
  
  var token = getToken()
  if(token !== 'undefined'){
    return (
      <div className={styles.cont}>
        <NavComponents/>
        <div className={styles.boards}>

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
        {props.history.push('/home')}
      </div>
    )
  }
}

export default Dashboard;