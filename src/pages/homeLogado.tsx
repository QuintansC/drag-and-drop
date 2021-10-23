import { useEffect, useContext } from 'react';
import { NavComponents } from '../components/dashboard/NavComponents';
import { NavVertical } from '../components/dashboard/NavVertical';
import { DropzoneContext } from '../contexts/DropzoneContext';
import styles from '../styles/pages/HomeLogado.module.scss';
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
		    <NavVertical/>
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