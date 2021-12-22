import styles from '../../../styles/components/dashboard/ContentMain.module.scss';
import { FaRegClock } from 'react-icons/fa';
import { Cards } from './cards';

export function ContentMain(){ 
  return(
    <div className={`${styles.HomeContent}`}>
      <span className={styles.titleSpan}> <FaRegClock size={25} /> <b>Visualizado recentemente</b></span>
      <div className={styles.row}>
          <Cards name="Projeto 1"/>
          <Cards name="Projeto 2"/>
      </div>
    </div>
    )
 
}