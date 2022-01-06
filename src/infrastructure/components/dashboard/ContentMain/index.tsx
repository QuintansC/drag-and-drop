import styles from './styles.module.scss';
import { FaRegClock } from 'react-icons/fa';
import { Cards } from './cards';
import { useContext } from 'react';
import { DropzoneContext } from '../../../../utils/contexts/DropzoneContext';
import { Workspace } from './workspace';

export function ContentMain(){ 
  const { open } = useContext(DropzoneContext)
  return(
    <div className={open?styles.HomeContentOpened: styles.HomeContentClosed}>
      <span className={styles.titleSpan}> <FaRegClock size={25} /> <b>Visualizado recentemente</b></span>
      <div className={styles.row}>
        <Cards name="Projeto 1"/>
        <Cards name="Projeto 2"/>
      </div>
      <span className={styles.workTitle}> <b>SUAS ÁREAS DE TRABALHO</b></span>
      <Workspace nameWorkspace="Metrocomm" nameCard="Drag and Drop"/>
      <Workspace nameWorkspace="Ancr" nameCard="Ancr Projetos" />
      <span className={styles.workTitle}> <b> ÁREAS DE TRABALHO DO CONVIDADO</b></span>
      <Workspace nameWorkspace="Metrocomm" nameCard="Drag and Drop"/>
    </div>
    )
 
}