import styles from './styles.module.css';
import Link from 'next/link';

export function Navbar(){
  return(
    <nav className={styles.Navbar}>
      <img src="/Trello-Logo.svg" alt="Logo" className={styles.logo} />
        <div className={styles.navs}></div>

        <div className={styles.login}>
          <Link 
            href="/login"
          >
            Fazer Login 
          </Link>

          <Link 
            href="/cadastro"
            className={styles.buttonAnimate}
          >
            Cadastre-se
          </Link>
        </div>
    </nav>
  )
}