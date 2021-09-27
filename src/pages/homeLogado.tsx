import { useEffect, useContext } from 'react';
import { NavComponents } from '../components/dashboard/NavComponents';
import { NavHorizontal } from '../components/dashboard/NavHorizontal';
import { DropzoneContext } from '../contexts/DropzoneContext';
import styles from '../styles/pages/HomeLogado.module.css';
import { ContentMain } from '../components/dashboard/ContentMain';
import { HomeLogadoType } from '../types/index'

function HomePricipal(props: any){ 
  const { getToken } = useContext(DropzoneContext);
  useEffect(()=>{
    document.title = 'Quadros | Trello';
  })
  
  var token = getToken()
  if(token !== 'undefined'){
    return (
      <div className={`${styles.HomeContent}`}>
        <NavComponents/>
		    <NavHorizontal/>
        <ContentMain/>
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

export default HomePricipal;