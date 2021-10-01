import { Link } from 'react-router-dom';
import { Navbar } from '../components/initial/NavBar';
import { useEffect } from 'react';
import styles from '../styles/pages/Home.module.css';
export default function Home(){
    useEffect(()=>{
        document.title = 'Trello';
    })
    return(
        <div className={styles.HomeContent}>
            <Navbar></Navbar>
            <div className={styles.Image}>
                <h2>O Trello ajuda os times a agilizar o trabalho.</h2>
                <p>Colabore, gerencie projetos e alcance novos picos de produtividade. Seja em um arranha-céu ou em home office, o jeito de trabalhar do seu time é único, e o Trello pode ajudar você a produzir cada vez mais.</p>
                <div className={styles.cadUni}>
                    <input type="text" placeholder="Email"></input> <Link to="/cadastro" className={styles.buttonAnimate}>Cadastre-se. É grátis</Link>
                </div>
            </div>
        </div>
    );
}