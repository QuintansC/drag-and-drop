"use client"
import styles from './styles.module.css';
import { Cards } from './cards';
import { FiUsers } from 'react-icons/fi';

export function OtherWorkspace(props: any){ 
  return(
        <div className={styles.col}>
            <div className={styles.row}>
                <div className={styles.rows}>
                    <FiUsers size={20} color='red'/>
                    <p> {props.nameUser} </p>
                </div>
            </div>
            <div className={styles.row}>
                <Cards name={props.nameCard} color={props.color}/>
            </div>
        </div>
    )
}