import { useState } from 'react';
import '../../styles/components/initial/Login.css';
import Logo from './../../images/Trello-Logo.svg';
import Google from './../../images/google.svg';
import Microsoft from './../../images/Microsoft.svg';
import Apple from './../../images/Apple.svg';
import api from '../../backend/api';
import { render } from '@testing-library/react';

export default function Login(props: any){
    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');
    const [check, setCheck] = useState(false);

    function loga(){
        try{
            api.post('/api/login',{
                user: login,
                password: senha,
            }).then(res=> {
                if(res.status===202){
                    props.history.push("/dashboard");
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

            if(element.type === 'checkbox'){
                if(element.checked){
                    setCheck(true);
                }else{
                    setCheck(false);
                }
            }
        });
    }

    return(
        <div className="loginContent">
            <img alt="logo" src={Logo}/>
            <div className="form">
                <form method="POST">
                    <h2>Crie sua conta</h2>
                    <span>Usuário</span>
                    <input type="text" onChange={enviaForm}></input>
                    <span>Senha</span>
                    <input type="password" onChange={enviaForm}></input>
                    <div>
                        <button className="submitButto" type="button" style={{marginTop: '50%', marginBottom: '-20%', backgroundColor: 'green' }} onClick={()=>loga()}>Fazer Login</button>
                        <h3 className="textConectado">Ou</h3>                  
                        <button className="submitButto" type="button" ><img src={Google} alt=""/> Conectar com o Google</button>
                        <button className="submitButto" type="button" ><img src={Microsoft} alt=""/> Conectar com a Microsoft</button>
                        <button className="submitButto" type="button" ><img src={Apple} alt=""/> Conectar com a Apple</button>
                    </div>
                </form>
            </div>
        </div>
    );
}