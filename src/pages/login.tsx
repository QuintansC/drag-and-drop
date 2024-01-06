/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useEffect, useState } from 'react';
import styles from '../styles/login.module.css';
import images  from '../../public/images/index';
import useLogin  from '../data/signin';
import { LoginType } from '../types';

export default  function Login(props: LoginType){
    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');
    const {signIn, message, loading} = useLogin(); 

    function enviaForm(){
        var queris = document.querySelectorAll('input');
        queris.forEach((element) =>{
            if(element.type === 'text'){
                setLogin(element.value);
            }

            if(element.type === 'password'){
                setSenha(element.value);
            }
        });
    }
    useEffect(()=>{
        if(loading === true){
            document.querySelector('.Loading')?.setAttribute('style', 'display: flex;')
        }else{
            document.querySelector('.Loading')?.setAttribute('style', 'display: none;')
        }
    }, [loading])

    return(
        <div className={styles.loginContent}>
            <div className='Loading'><img src='/loading.gif' alt="" /></div>
            <img className={styles.logo} alt="logo" src={images.Logo}/>
            <p hidden>{message}</p>
            <div className={styles.form}>
                <form method="POST">
                    <h2>Crie sua conta</h2>
                    <span>Usuário</span>
                    <input data-testid="user" title='user' type="text" onChange={enviaForm}  onKeyPress={(e)=>{e.which === 13 || e.keyCode === 13? signIn(login, senha): null}}></input>
                    <span>Senha</span>
                    <input data-testid="password" title="password" type="password" onChange={enviaForm}  onKeyPress={(e)=>{e.which === 13 || e.keyCode === 13? signIn(login, senha) : null}}></input>
                    <div>
                        <button 
                            title="enviar" 
                            className={styles.submitButton} 
                            type="button" 
                            onClick={()=>loading?null:signIn(login, senha)}
                        >Fazer Login</button>
                        <h3 className={styles.textConectado}>Ou</h3>                  
                        <button name="google" className={styles.submitButton} type="button" ><img src={images.Google} alt=""/> Conectar com o Google</button>
                        <button name="microsoft" className={styles.submitButton} type="button" ><img src={images.Microsoft} alt=""/> Conectar com a Microsoft</button>
                        <button name="apple" className={styles.submitButton} type="button" ><img src={images.Apple} alt=""/> Conectar com a Apple</button>
                    </div>
                </form>
            </div>
        </div>
    );
}