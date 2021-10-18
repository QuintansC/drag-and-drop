import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../../styles/components/dashboard/NavHorizontal.module.scss';

export function NavHorizontal(){ 

  const [ishidden, setIsHidden] = useState(false)

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
    <nav className={styles.navHorizontal}>
        <ul>
          <li><Link to="/gustavoquintans/boards">Quadros</Link></li>
          <li><Link to="/templates">Modelos</Link></li>
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