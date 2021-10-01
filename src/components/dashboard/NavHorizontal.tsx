import styles from '../../styles/components/dashboard/NavHorizontal.module.css';

export function NavHorizontal(){
  return(
    <nav className={styles.navHorizontal}>
        <ul>
            <li>Quadros</li>
            <li>Modelos</li>
            <li>Inicio</li>
        </ul>
        <h3>Area de trabalho</h3>
        <ul>
            <li>+ Criar area de trabalho</li>
        </ul>
    </nav>
  )
}