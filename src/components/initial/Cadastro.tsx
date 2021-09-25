import { useState } from 'react';
import styles from '../../styles/components/initial/Cadastro.module.css';
import Logo from './../../images/Trello-Logo.svg';
import Google from './../../images/google.svg';
import Microsoft from './../../images/Microsoft.svg';
import Apple from './../../images/Apple.svg';
import api from '../../services/api';

export default function Cadastrar(props: any){
    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');
    const [email, setEmail] = useState('');
    function cada(){
        try{
            api.post('/api/cadastrar',{
                email: email.toLocaleLowerCase(),
                user: login.toLocaleLowerCase(),
                password: senha,
            }).then(res=> {
                if(res.status===201){
                    props.history.push("/login");
                }else if(res.status===406){
                    console.log(res.data.message);
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

            if(element.type === 'email'){
                setEmail(element.value);
            }
        });
    }

    return(
        <div className={styles.cadastroContent}>
            <img alt="logo" src={Logo}/>
            <div className={styles.form}>
                <form method="POST">
                    <h2>Crie sua conta</h2>
                    <input type="email" name="" placeholder="Insira seu e-mail"/>
                    <input type="text" name="" placeholder="Seu Nome de Usuário"/>
                    <input type="password" onChange={enviaForm} placeholder="Sua Senha"></input>
                    
                    <p>Ao se cadastrar, você confirma que leu e aceitou nossos Termos de serviço e nossa Política de privacidade.</p>
                    <div>
                        <button className={styles.submitButtons} onClick={cada} type="button" style={{marginTop: '50%', marginBottom: '-20%'}}>Conectar</button>
                        <h3 className={styles.textConectado}>Ou</h3>                  
                        <button className={styles.submitButtons} type="button" ><img src={Google} alt=""/> Conectar com o Google</button>
                        <button className={styles.submitButtons} type="button" ><img src={Microsoft} alt=""/> Conectar com a Microsoft</button>
                        <button className={styles.submitButtons} type="button" ><img src={Apple} alt=""/> Conectar com a Apple</button>
                    </div>
               </form>
               
            </div>
        </div>
    );
}