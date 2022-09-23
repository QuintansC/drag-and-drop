import { Link, Redirect } from 'react-router-dom';
import { Navbar } from '../../components/initial/NavBar';
import { useContext, useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { DropzoneContext } from '../../../utils/contexts/DropzoneContext';

export default function Home(){
    const { getToken } = useContext(DropzoneContext)
    const [Token, setToken]= useState('')
    useEffect(()=>{
        document.title = 'Trello';
        if(window.location.pathname === '/'+sessionStorage.getItem('usernameTrello')+'/boards'){
            window.location.href = '/'+sessionStorage.getItem('usernameTrello')+'/boards'
        }
    })

    useEffect(()=>{
        let token = getToken();
        if(token !== null){
            setToken(token);    
        }else{
            setToken('undefined')
        }
    }, [])

    if(Token === 'undefined'){
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
    );}
    else{
        let user = sessionStorage.getItem('usernameTrello');
        if(user === null){
            return <Redirect to="/home" />
        }
        else{
            return <Redirect to={`/${user}/boards`} />  
        }     
    }
}