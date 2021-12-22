import styles from '../../../styles/components/dashboard/NavVertical/project.module.scss';
import { FaRegStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Project  (props: any){
    const [ishidden, setIsHidden] = useState(false)

    function click(e: any){
        e.preventDefault();
       
        var objeto = document.querySelectorAll(`.${styles.project}[id="${props.name}"] li`)
        console.log(objeto)
        if(ishidden){
            objeto.forEach((obj)=>obj.removeAttribute('hidden'))
            setIsHidden(false)
        }else{
            objeto.forEach((obj)=>obj.setAttribute('hidden', ''))
            setIsHidden(true)
        }
    }
    return(
        <ul className={styles.project} id={props.name}>
            <button onClick={click}><b> {props.name} </b></button>
            <li><Link to="/cloneuser3/getting-started">Introdução</Link></li>
            <li><Link to="cloneuser3/home">Quadros</Link></li>
            <li><Link to="/cloneuser3/highlights">Destaques</Link></li>
            <li><Link to="/cloneuser3/tables">Tabela da Area de Trabalho</Link></li>
            <li><Link to="/cloneuser3/members">Membros</Link></li>
            <li><Link to="/cloneuser3/account">Configurações</Link></li>
        </ul>
    )
}