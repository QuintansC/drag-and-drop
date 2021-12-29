import { Link } from 'react-router-dom';
import styles from './styles/index.module.scss';
import { FaTrello, FaBorderAll } from 'react-icons/fa';
import { BiPulse  } from 'react-icons/bi';

import Project  from './project';
import { useContext, useState } from 'react';
import { DropzoneContext } from '../../../../utils/contexts/DropzoneContext';

export function NavVertical(){ 
  const { open } = useContext(DropzoneContext);
  const user = sessionStorage.getItem('usernameTrello')

  function setActive(name: string){
    switch (name) {
      case 'Quadros':
        if(window.location.pathname === `/${user}/boards`){
          return 'active'
        }else{
          return 'not-active'
        }
      break;
      case 'Modelos': 
        if(window.location.pathname === `/templates`){
          return 'active'
        }else{
          return 'not-active'
        }
      break;
      case 'Inicio': 
        if(window.location.pathname === `/inicio`){
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
          <li className={setActive('Quadros')}><Link to={`/${user}/boards`}> <FaTrello size={15} /> Quadros</Link></li>
          <li className={setActive('Modelos')}><Link to="/templates"> <FaBorderAll size={15} /> Modelos</Link></li>
          <li className={setActive('Inicio')}><Link to="/"> <BiPulse size={15} />Inicio</Link></li>
        </ul>
        <h3>Area de trabalho</h3>
      <Project name='Trello' />
      <Project name='[Clone] Trello' />
    </nav>
  )
}