import { useState } from 'react';
import styles from '../../styles/components/initial/Login.module.css';
import Logo from './../../images/Trello-Logo.svg';
import Google from './../../images/google.svg';
import Microsoft from './../../images/Microsoft.svg';
import Apple from './../../images/Apple.svg';

import useLogin  from '../../hooks/login'
import { LoginType } from '../../types';

export default  function Login(props: LoginType){
    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');
    const {signIn, message} = useLogin();

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

    return(
        <div className={styles.loginContent}>
            <img alt="logo" src={Logo}/>
            <p>{message}</p>
            <div className={styles.form}>
                <form method="POST">
                    <h2>Crie sua conta</h2>
                    <span>Usuário</span>
                    <input data-testid="user" type="text" onChange={enviaForm}></input>
                    <span>Senha</span>
                    <input title="password" type="password" onChange={enviaForm}></input>
                    <div>
                        <button 
                            name="enviar" 
                            className={styles.submitButto} 
                            type="button" 
                            style={{
                                marginTop: '50%', 
                                marginBottom: '-20%', 
                                backgroundColor: 'green' 
                            }} 
                            onClick={()=>signIn(login, senha)}
                        >Fazer Login</button>
                        <h3 className={styles.textConectado}>Ou</h3>                  
                        <button name="google" className={styles.submitButto} type="button" ><img src={Google} alt=""/> Conectar com o Google</button>
                        <button className={styles.submitButto} type="button" ><img src={Microsoft} alt=""/> Conectar com a Microsoft</button>
                        <button className={styles.submitButto} type="button" ><img src={Apple} alt=""/> Conectar com a Apple</button>
                    </div>
                </form>
            </div>
        </div>
    );
}