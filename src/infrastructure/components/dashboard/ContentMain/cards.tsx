import styles from './styles.module.scss';
import { FaRegStar } from 'react-icons/fa'

export function Cards (props: any){
    return(
    <div className={styles.card}>
        <strong>{props.name}</strong>
        <img src="" alt="" />
        <FaRegStar className={styles.icon} size={15} />
      </div>
    )
}