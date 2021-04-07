import { useState, useContext } from 'react';
import styles from '../../styles/components/initial/Login.module.css';
import Logo from './../../images/Trello-Logo.svg';
import Google from './../../images/google.svg';
import Microsoft from './../../images/Microsoft.svg';
import Apple from './../../images/Apple.svg';
import api from '../../services/api';

export default function Login(props: any){
    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');

    function loga(){
        try{
            api.post('/api/login',{
                user: login,
                password: senha,
            }).then(res=> {
                if(res.status===202){
                    props.history.push("/dashboard", {
                        token: res.data.token
                    });  
                }else if(res.status===406){
                    console.log('Login incorreto');
                }else{
                    console.log(res.data.message);
                }
            });
        }
        catch{
            //error message
        }       
    }

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
            <div className={styles.form}>
                <form method="POST">
                    <h2>Crie sua conta</h2>
                    <span>Usuário</span>
                    <input type="text" onChange={enviaForm}></input>
                    <span>Senha</span>
                    <input type="password" onChange={enviaForm}></input>
                    <div>
                        <button className={styles.submitButto} type="button" style={{marginTop: '50%', marginBottom: '-20%', backgroundColor: 'green' }} onClick={()=>loga()}>Fazer Login</button>
                        <h3 className={styles.textConectado}>Ou</h3>                  
                        <button className={styles.submitButto} type="button" ><img src={Google} alt=""/> Conectar com o Google</button>
                        <button className={styles.submitButto} type="button" ><img src={Microsoft} alt=""/> Conectar com a Microsoft</button>
                        <button className={styles.submitButto} type="button" ><img src={Apple} alt=""/> Conectar com a Apple</button>
                    </div>
                </form>
            </div>
        </div>
    );
}