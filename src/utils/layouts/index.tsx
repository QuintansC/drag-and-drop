import { useEffect } from 'react';
import { NavComponents } from '../../components/dashboard/NavComponents';
import { NavVertical } from '../../components/dashboard/NavVertical/index';
import styles from './styles.module.css';
function HomePricipal(props: any){ 
  useEffect(()=>{
    document.title = props.title;
  })
  return (
    <div className={`${styles.HomeContent}`}>
      <NavComponents/>
      <div className={styles.Line}>
        <NavVertical/>
        {props.children}
      </div>
    </div>
  );
}

export default HomePricipal;