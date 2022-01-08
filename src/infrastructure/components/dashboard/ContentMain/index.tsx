import styles from './styles.module.scss';
import { FaRegClock } from 'react-icons/fa';
import { Cards } from './cards';
import { useContext } from 'react';
import { DropzoneContext } from '../../../../utils/contexts/DropzoneContext';
import { Workspace } from './workspace';
import { OtherWorkspace } from './otherWorkspace';

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
      <Workspace nameWorkspace="Metrocomm" nameCard="Drag and Drop" color="url(/backgroundCard.jpg)"/>
      <Workspace nameWorkspace="Ancr" nameCard="Ancr Projetos" />
      <span className={styles.workTitle}> <b> ÁREAS DE TRABALHO DO CONVIDADO</b></span>
      <OtherWorkspace nameUser="Evandro Ribeiro" nameCard="Drag and Drop"/>
      <div className={styles.rows}>
        <button className={styles.allBoards}>Ver todos os quadros fechados</button>
      </div>
    </div>
    )
 
}