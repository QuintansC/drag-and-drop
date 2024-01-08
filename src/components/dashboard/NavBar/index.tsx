import Image from 'next/image';
import styles from './styles.module.css';
import Link from 'next/link';
import Trello from "/public/images/Trello-Logo.svg"
export function Navbar(){
  return(
    <nav className={styles.Navbar}>
      <Image src={Trello} width={180} height={100} alt="Logo" className={styles.logo} />
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