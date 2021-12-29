import styles from './styles.module.scss';
import Logout from '../../../images/logout.svg';
import { useContext } from 'react';
import { DropzoneContext } from '../../../contexts/DropzoneContext';

export function NavComponents(props: any){
  const { open, setOpen } = useContext(DropzoneContext)
  function sair(){
    sessionStorage.clear();
    window.location.href = '/home';
  }
  return(
    <nav className={styles.NavContent}>
      <button onClick={()=>{
        setOpen(!open);
      }} 
      className={styles.menu} type="button"><img src="/menu.png" alt=""></img></button>
      <img src="/logo.gif" alt="Trello" className={styles.logo} />
      <div className={styles.links}>
        <a 
          href="http://localhost:3000/"
          className={styles.buttonAnimate}
        >
          Área de trabalho<img src="/down-arrow.png"  alt="new"/>
        </a>  

        <a 
          href="http://localhost:3000/" 
          className={styles.buttonAnimate}
        >
          Recente<img src="/down-arrow.png" alt="save"/>
        </a>

        <a 
          href="http://localhost:3000/" 
          className={styles.buttonAnimate}
        >
          Marcado com estrela<img src="/down-arrow.png" alt="add cart"/>
        </a>

        <button type="button"> <span>Criar</span> </button>
      </div>

      <div className={styles.perfil}>
        <button 
          onClick={sair}
          className={styles.buttonAnimate}
        >
          Sair <img src={Logout} alt="logout"/>
        </button>
      </div>
    </nav>
  )
}