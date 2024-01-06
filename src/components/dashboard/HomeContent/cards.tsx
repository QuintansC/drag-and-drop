"use client"
import styles from './styles.module.css';
import { FaRegStar } from 'react-icons/fa'

export function Cards (props: any){
    return(
      <div className={styles.card} style={{background: props.color, backgroundSize: 'cover'}}>
        <strong>{props.name}</strong>
        <FaRegStar className={styles.icon} size={15} />
      </div>
    )
}