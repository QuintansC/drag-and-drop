import styles from './styles.module.scss';
import { Cards } from './cards';
import { FaCube, FaTrello } from 'react-icons/fa';
import { BiTable, BiUser } from 'react-icons/bi';
import { RiSettings3Fill } from 'react-icons/ri';
import { GrUpdate } from 'react-icons/gr';

export function Workspace(props: any){ 
  return(
        <div className={styles.col}>
            <div className={styles.row}>
                <div className={styles.rows}>
                    <FaCube size={18} color='purple'/>
                    <p> {props.nameWorkspace} </p>
                </div>
                <button className={styles.buttonWorkspace}> <FaTrello size={15} /> Quadros </button>
                <button className={styles.buttonWorkspace}> <BiTable size={15} /> Tabela da Área de trabalho </button>
                <button className={styles.buttonWorkspace}> <BiUser size={15}/> Membros (1) </button>
                <button className={styles.buttonWorkspace}> <RiSettings3Fill size={15} /> Configurações </button>
                <button className={styles.buttonWorkspace}> <GrUpdate size={15}/> Atualizar </button>
            </div>
            <Cards name={props.nameCard}/>
        </div>
    )
}