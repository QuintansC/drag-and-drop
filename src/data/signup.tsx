import api from '../utils/api';
import { useState } from 'react'
import { useHistory } from 'react-router-dom';

const useCadastrar = ()=>{
    const history = useHistory();
    const [message, setMessage] = useState('');

    async function signUp (email:string, login: string, senha:string){
        try{
            api.post('/cadastrar',{
                email: email.toLocaleLowerCase(),
                user: login.toLocaleLowerCase(),
                password: senha,
            }).then(res=> {
                if(res.status===201){
                    history.push("/login");
                }else if(res.status===406){
                    setMessage(res.data.message);
                }else{
                    setMessage(res.data.message);
                }
            });
        }
        catch(error: any){
            setMessage('mensagem de error')
        }    
    }   
    return {
        signUp, message
    }
}

export default useCadastrar