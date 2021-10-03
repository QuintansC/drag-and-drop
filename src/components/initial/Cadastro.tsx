import { useState } from 'react';
import styles from '../../styles/components/initial/Cadastro.module.css';
import svg from './../../images/index';
import { CadastroType } from '../../types';
import useCadastrar from '../../hooks/cadastrar';

export default function Cadastrar(props: CadastroType){
    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');
    const [email, setEmail] = useState('');

    const { signUp } = useCadastrar();
    
    function enviaForm(){
        var queris = document.querySelectorAll('input');
        queris.forEach((element) =>{
            if(element.type === 'text'){
                setLogin(element.value);
            }

            if(element.type === 'password'){
                setSenha(element.value);
            }

            if(element.type === 'email'){
                setEmail(element.value);
            }
        });
    }

    return(
        <div className={styles.cadastroContent}>
            <img alt="logo" src={svg.Logo}/>
            <div className={styles.form}>
                <form method="POST">
                    <h2>Crie sua conta</h2>
                    <input type="email" title="email" placeholder="Insira seu e-mail"/>
                    <input type="text" title="user" placeholder="Seu Nome de Usuário"/>
                    <input type="password" title="password" onChange={enviaForm} placeholder="Sua Senha"></input>
                    
                    <p>Ao se cadastrar, você confirma que leu e aceitou nossos Termos de serviço e nossa Política de privacidade.</p>
                    <div>
                        <button className={styles.submitButtons} title="conectar" onClick={()=>signUp(email, login, senha)} type="button" style={{marginTop: '50%', marginBottom: '-20%'}}>Conectar</button>
                        <h3 className={styles.textConectado}>Ou</h3>                  
                        <button className={styles.submitButtons} type="button" ><img src={svg.Google} alt=""/> Conectar com o Google</button>
                        <button className={styles.submitButtons} type="button" ><img src={svg.Microsoft} alt=""/> Conectar com a Microsoft</button>
                        <button className={styles.submitButtons} type="button" ><img src={svg.Apple} alt=""/> Conectar com a Apple</button>
                    </div>
               </form>
               
            </div>
        </div>
    );
}