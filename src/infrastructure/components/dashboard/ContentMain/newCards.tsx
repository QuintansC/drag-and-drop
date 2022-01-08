import styles from './styles.module.scss';

export function NewCards (props: any){
    return(
      <div className={styles.cardNew}>
        <span>Criar novo quadro</span>
      </div>
    )
}