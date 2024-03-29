import { useEffect, useState } from 'react';
import styles from '../styles/cadastrar.module.css';
import images  from '../utils/images';
import { CadastroType } from '../types';;
import useCadastrar from '../data/signup';

import Google from '../../public/images/google.svg';
import Image from 'next/image';

export default function Cadastrar(props: CadastroType){
    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');
    const [email, setEmail] = useState('');

    const { signUp, message, loading } = useCadastrar();
    
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


    useEffect(()=>{
        if(loading === true){
            document.querySelector('.Loading')?.setAttribute('style', 'display: flex;')
        }else{
            document.querySelector('.Loading')?.setAttribute('style', 'display: none;')
        }
    }, [loading])
    return(
        <div className={styles.cadastroContent}>
            <div className='Loading'><img src='../../public/loading.gif' alt="" /></div>
            <Image width={0} height={0} className={styles.Logo} alt="logo" src={images.Logo} />
            <p hidden>{message}</p>
            <div className={styles.form}>
                <form method="POST">
                    <h2>Crie sua conta</h2>
                    <input type="email" title="email" placeholder="Insira seu e-mail" required/>
                    <input type="text" title="user" placeholder="Seu Nome de Usuário"/>
                    <input type="password" title="password" onChange={enviaForm} placeholder="Sua Senha"></input>
                    
                    <p>Ao se cadastrar, você confirma que leu e aceitou nossos Termos de serviço e nossa Política de privacidade.</p>
                    <div>
                        <button className={styles.submitButtons} title="conectar" onClick={()=>signUp(email, login, senha)} type="button" style={{marginTop: '50%', marginBottom: '-20%'}}>Conectar</button>
                        <h3 className={styles.textConectado}>Ou</h3>                  
                        <button className={styles.submitButtons} type="button" ><Image width={30} height={30} src={Google} alt=""/> Conectar com o Google</button>
                        <button className={styles.submitButtons} type="button" ><Image width={30} height={30} src={images.Microsoft} alt=""/> Conectar com a Microsoft</button>
                        <button className={styles.submitButtons} type="button" ><Image width={30} height={30} src={images.Apple} alt=""/> Conectar com a Apple</button>
                    </div>
               </form>
               
            </div>
        </div>
    );
}