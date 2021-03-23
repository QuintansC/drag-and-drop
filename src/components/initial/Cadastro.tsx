import { useState } from 'react';
import '../../styles/components/initial/Cadastro.css';
import Logo from './../../images/Trello-Logo.svg';
import Google from './../../images/google.svg';
import Microsoft from './../../images/Microsoft.svg';
import Apple from './../../images/Apple.svg';


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
        <div className="cadastroContent">
            <img alt="logo" src={Logo}/>
            <div className="form">
                <form method="POST">
                    <h2>Crie sua conta</h2>
                    <input type="text" onChange={enviaForm} placeholder="Insira seu e-mail"></input>
                    <p>Ao se cadastrar, você confirma que leu e aceitou nossos Termos de serviço e nossa Política de privacidade.</p>
                    <div>
                        <button className="submitButtons" type="button" style={{marginTop: '50%', marginBottom: '-20%'}}>Conectar</button>
                        <h3 className="textConectado">Ou</h3>                  
                        <button className="submitButtons" type="button" ><img src={Google} alt=""/> Conectar com o Google</button>
                        <button className="submitButtons" type="button" ><img src={Microsoft} alt=""/> Conectar com a Microsoft</button>
                        <button className="submitButtons" type="button" ><img src={Apple} alt=""/> Conectar com a Apple</button>
                    </div>
               </form>
               
            </div>
        </div>
    );
}