import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../../styles/components/dashboard/NavVertical.module.scss';
import { FaTrello, FaBorderAll } from 'react-icons/fa'

export function NavVertical(){ 

  const [ishidden, setIsHidden] = useState(false)
  const user = sessionStorage.getItem('usernameTrello')
  var urlQ = '/'+user+'/boards';

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
  function click(e: any){
    e.preventDefault();
    var objeto = document.querySelectorAll(`.${styles.project} li`)
    if(ishidden){
      console.log('teste')
      objeto.forEach((obj)=>obj.removeAttribute('hidden'))
      setIsHidden(false)
    }else{
      objeto.forEach((obj)=>obj.setAttribute('hidden', ''))
      setIsHidden(true)
    }
  }

  return(
    <nav className={styles.navVertical}>
        <ul>
          <li><Link to={`/${user}/boards`} className={setActive('Quadros')}> <FaTrello size={15} /> Quadros</Link></li>
          <li><Link to="/templates" className={setActive('Modelos')}> <FaBorderAll size={15} /> Modelos</Link></li>
          <li><Link to="/">Inicio</Link></li>
        </ul>
        <h3>Area de trabalho</h3>
        <ul className={styles.project}>
          <button onClick={click}> Projeto Name </button>
          <li><Link to="/cloneuser3/getting-started">Introdução</Link></li>
          <li><Link to="cloneuser3/home">Quadros</Link></li>
          <li><Link to="/cloneuser3/highlights">Destaques</Link></li>
          <li><Link to="/cloneuser3/tables">Tabela da Area de Trabalho</Link></li>
          <li><Link to="/cloneuser3/members">Membros</Link></li>
          <li><Link to="/cloneuser3/account">Configurações</Link></li>
        </ul>
    </nav>
  )
}