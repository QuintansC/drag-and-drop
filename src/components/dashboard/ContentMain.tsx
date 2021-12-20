import styles from '../../styles/components/dashboard/ContentMain.module.scss';
import { FaRegClock } from 'react-icons/fa'

export function ContentMain(){ 
  return(
    <div className={`${styles.HomeContent}`}>
      <span className={styles.titleSpan}> <FaRegClock size={25} /> <b>Visualizado recentemente</b></span>
      <div className={styles.row}>
        <div className={styles.card}>
          <strong>Projeto 1</strong>
          <img src="" alt="" />
        </div>
        <div className={styles.card}>
          <strong>Projeto 2</strong>
          <img src="" alt="" />
        </div>
      </div>
    </div>
    )
 
}