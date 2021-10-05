import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../../styles/components/dashboard/NavHorizontal.module.css';

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
            <li><Link to="/">Quadros</Link></li>
            <li><Link to="">Modelos</Link></li>
            <li><Link to="">Inicio</Link></li>
        </ul>
        <h3>Area de trabalho</h3>
        <ul className={styles.project}>
            <button onClick={click}> Projeto Name </button>
            <li> teste</li>
            <li> testes</li>
        </ul>
    </nav>
  )
}