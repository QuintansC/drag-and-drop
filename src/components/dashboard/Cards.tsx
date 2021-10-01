import { useContext, useEffect, useState } from 'react';
import { DropzoneContext } from '../../contexts/DropzoneContext';
import styles from '../../styles/components/dashboard/Card.module.css';

interface CardProps{
    color: string,
    content: string,
    hora:{
      hours: number,
      minutes:number,
      seconds:number
    }
}


export function Cards (props: CardProps){
  const { enableDropzone, disableDropzone} = useContext(DropzoneContext);
  const [min, setMin] = useState('');
  const [minute, setMinute] = useState(0);
  const [isMinute, setIsMinute] = useState(false);

  const [sec, setSec] = useState('');
  const [seconds, setSeconds] = useState(0);
  const [isSeconds, setIsSeconds] = useState(false);

  const [hou, setHou] = useState('');
  const [hours, setHours] = useState(0);
  const [isHours, setIsHours] = useState(false);


  useEffect(() =>{
    if(props.hora.hours <= 10){
      setHou('0'+ String(props.hora.hours));
      setIsHours(false);
    }else{
      setIsHours(true);
      setHours(props.hora.hours);
    }
  }, [props.hora.hours]);

  useEffect(() =>{
    if(props.hora.minutes <= 10){
      setMin('0'+ String(props.hora.minutes));
      setIsMinute(false);
    }else{
      setIsMinute(true);
      setMinute(props.hora.minutes);
    }
  }, [props.hora.minutes]);

  useEffect(() =>{
    if(props.hora.seconds <= 10){
      setSec('0'+ String(props.hora.seconds));
      setIsSeconds(false);
    }else{
      setIsSeconds(true);
      setSeconds(props.hora.seconds);
    }
  }, [props.hora.seconds]);

  function dragstart({target} :any){
    //Começa o drag
    enableDropzone();
    target.classList.add(styles.isDragging);
  }
  
  function drag(){}
  
  function dragend({target}: any){
    //Termina o drag
    disableDropzone();
    target.classList.remove(styles.isDragging);
  }
  

  return(
    <div 
      className={styles.card} 
      draggable="true"
      onDragStart={dragstart}
      onDrag={drag}
      onDragEnd={dragend}      
    >
      <div className={`${styles.status} ${props.color}`} draggable={false}></div>
      <div className={styles.content}>{props.content}<br></br>Hora: {isHours?hours:hou}:{isMinute?minute:min}:{isSeconds?seconds:sec}</div>
    </div>
  );
}