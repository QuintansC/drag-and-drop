/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import images  from '../../../infrastructure/images/index';
import useLogin  from '../../../data/signin';
import { LoginType } from '../../protocols';

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
                    <input data-testid="user" type="text" onChange={enviaForm}  onKeyPress={(e)=>{e.which === 13 || e.keyCode === 13? signIn(login, senha): null}}></input>
                    <span>Senha</span>
                    <input title="password" type="password" onChange={enviaForm}  onKeyPress={(e)=>{e.which === 13 || e.keyCode === 13? signIn(login, senha) : null}}></input>
                    <div>
                        <button 
                            title="enviar" 
                            className={styles.submitButto} 
                            type="button" 
                            style={{
                                marginTop: '50%', 
                                marginBottom: '-20%', 
                                backgroundColor: 'green' 
                            }} 
                            onClick={()=>loading?null:signIn(login, senha)}
                        >Fazer Login</button>
                        <h3 className={styles.textConectado}>Ou</h3>                  
                        <button name="google" className={styles.submitButto} type="button" ><img src={images.Google} alt=""/> Conectar com o Google</button>
                        <button className={styles.submitButto} type="button" ><img src={images.Microsoft} alt=""/> Conectar com a Microsoft</button>
                        <button className={styles.submitButto} type="button" ><img src={images.Apple} alt=""/> Conectar com a Apple</button>
                    </div>
                </form>
            </div>
        </div>
    );
}