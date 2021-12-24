import styles from '../../../styles/components/dashboard/ContentMain.module.scss';
import { FaRegClock } from 'react-icons/fa';
import { Cards } from './cards';
import { useContext } from 'react';
import { DropzoneContext } from '../../../contexts/DropzoneContext';

export function ContentMain(){ 
  const { open } = useContext(DropzoneContext)
  return(
    <div className={open?styles.HomeContentOpened: styles.HomeContentClosed}>
      <span className={styles.titleSpan}> <FaRegClock size={25} /> <b>Visualizado recentemente</b></span>
      <div className={styles.row}>
          <Cards name="Projeto 1"/>
          <Cards name="Projeto 2"/>
      </div>
    </div>
    )
 
}