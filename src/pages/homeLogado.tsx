import { useEffect, useState, useContext } from 'react';
import { NavComponents } from '../components/dashboard/NavComponents';
import { NavHorizontal } from '../components/dashboard/NavHorizontal';
import { DropzoneContext } from '../contexts/DropzoneContext';
import styles from '../styles/pages/HomeLogado.module.css';

function HomePricipal(props: any){ 
  const { getToken } = useContext(DropzoneContext);
  //Estados necessarios para a dashboard
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  useEffect(()=>{
    document.title = 'Quadros | Trello';
  })
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
      <div className={`${styles.HomeContent}`}>
        <NavComponents/>
		    <NavHorizontal/>
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

export default HomePricipal;