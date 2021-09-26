import styles from '../../styles/components/dashboard/NavComponents.module.css';
import Logout from '../../images/logout.svg';

export function NavComponents(){
  return(
    <nav className={styles.NavContent}>
      <button className={styles.menu} type="button"><img src="/menu.png"></img></button>
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
          <a 
            href="http://localhost:3000/"
            className={styles.buttonAnimate}
          >
            Sair <img src={Logout} alt="logout"/>
          </a>
        </div>
    </nav>
  )
}