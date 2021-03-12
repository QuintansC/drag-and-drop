import { useState } from 'react';
import '../../styles/components/initial/Login.css';


export default function Login(props: any){
    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');
    const [check, setCheck] = useState(false);

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
            <div className="form">
                <form method="POST">
                    <span>Usuário</span>
                    <input type="text" onChange={enviaForm}></input>
                    <span>Senha</span>
                    <input type="password" onChange={enviaForm}></input>
                    
                    <input className="conectado" type="checkbox"></input>
                    <span className="textConectado">Manter-se Conectado?</span>
                    <input className="submitButton" type="button" value="Entrar"></input>
                </form>
            </div>
        </div>
    );
}