import { useEffect, useContext, useState } from 'react';
import { NavComponents } from '../../infrastructure/components/dashboard/NavComponents';
import { NavVertical } from '../../infrastructure/components/dashboard/NavVertical/index';
import styles from './styles.module.scss';
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