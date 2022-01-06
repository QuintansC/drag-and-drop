import styles from './styles/project.module.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaArrowDown, FaCube } from 'react-icons/fa';
import { RiArrowUpSLine, RiArrowDownSLine } from 'react-icons/ri';

export default function Project  (props: any){
  const [ishidden, setIsHidden] = useState(false)
  return(
    <ul className={styles.project} id={props.name}>
      <button onClick={()=>setIsHidden(!ishidden)}><FaCube size={18} color='purple'/><b> {props.name} </b> {ishidden === true?<RiArrowDownSLine size={20}/>:<RiArrowUpSLine size={20}/>} </button>
      <li hidden={ishidden}><Link to="/cloneuser3/getting-started">Introdução</Link></li>
      <li hidden={ishidden}><Link to="cloneuser3/home">Quadros</Link></li>
      <li hidden={ishidden}><Link to="/cloneuser3/highlights">Destaques</Link></li>
      <li hidden={ishidden}><Link to="/cloneuser3/tables">Tabela da Area de Trabalho</Link></li>
      <li hidden={ishidden}><Link to="/cloneuser3/members">Membros</Link></li>
      <li hidden={ishidden}><Link to="/cloneuser3/account">Configurações</Link></li>
    </ul>
  )
}