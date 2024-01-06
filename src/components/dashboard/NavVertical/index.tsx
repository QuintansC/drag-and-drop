"use client"
import Link from 'next/link';
import styles from './styles/index.module.css';
import { FaTrello, FaBorderAll } from 'react-icons/fa';
import { BiPulse  } from 'react-icons/bi';

import Project  from './project';
import { useContext } from 'react';
import { DropzoneContext } from '../../../utils/contexts/DropzoneContext';

export function NavVertical(){ 
  const { open } = useContext(DropzoneContext);
  const user = typeof window !== 'undefined' ? sessionStorage.getItem('usernameTrello') : undefined;

  function setActive(name: string){
    switch (name) {
      case 'Quadros':
        if(typeof window !== 'undefined' && window.location.pathname === `/${user}/boards`){
          return 'active'
        }else{
          return 'not-active'
        }
      break;
      case 'Modelos': 
        if(typeof window !== 'undefined' && window.location.pathname === `/templates`){
          return 'active'
        }else{
          return 'not-active'
        }
      break;
      case 'Inicio': 
        if(typeof window !== 'undefined' && window.location.pathname === `/inicio`){
          return 'active'
        }else{
          return 'not-active'
        }
      break;
    
      default:
        break;
    }
  }
  return(
    <nav className={open?styles.navVerticalOpened: styles.navVerticalClosed}>
        <ul>
          <li className={setActive('Quadros')}><Link href={`/${user}/boards`}> <FaTrello size={15} /> Quadros</Link></li>
          <li className={setActive('Modelos')}><Link href="/templates"> <FaBorderAll size={15} /> Modelos</Link></li>
          <li className={setActive('Inicio')}><Link href="/"> <BiPulse size={15} />Inicio</Link></li>
          <h3>Area de trabalho</h3>
        </ul>
        
      <Project name='Trello' />
      <Project name='[Clone] Trello' />
    </nav>
  )
}