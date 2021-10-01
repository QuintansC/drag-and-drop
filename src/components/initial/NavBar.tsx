import styles from '../../styles/components/initial/Navbar.module.css';
import { Link } from 'react-router-dom';

export function Navbar(){
  return(
    <nav className={styles.Navbar}>
      <img src="/Trello-Logo.svg" alt="Logo" className={styles.logo} />
        <div className={styles.navs}>
          
        </div>

        <div className={styles.login}>
            <Link 
                to="/login"
            >
                Fazer Login 
            </Link>

            <Link 
                to="/cadastro"
                className={styles.buttonAnimate}
            >
                Cadastre-se
            </Link>
        </div>
    </nav>
  )
}