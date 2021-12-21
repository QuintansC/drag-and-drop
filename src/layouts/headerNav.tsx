import { useEffect, useContext, useState } from 'react';
import { NavComponents } from '../components/dashboard/NavComponents';
import { NavVertical } from '../components/dashboard/NavVertical';
import { DropzoneContext } from '../contexts/DropzoneContext';
import styles from '../styles/pages/HomeLogado.module.scss';
import { ContentMain } from '../components/dashboard/ContentMain';
import { HomeLogadoType } from '../types/index'
import { Redirect } from 'react-router-dom';

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