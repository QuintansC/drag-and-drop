import api from '../utils/api';
import { useState } from 'react'
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';

const useCadastrar = ()=>{
    const history = useHistory();
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false)

    async function signUp (email:string, login: string, senha:string){
        setLoading(true)
        try{
            api.post('/cadastrar',{
                email: email.toLocaleLowerCase(),
                user: login.toLocaleLowerCase(),
                password: senha,
            }).then(res=> {
                if(res.status===201){
                    swal("Bom trabalho!", res.data.message, "success")
                    setLoading(false)
                    setTimeout(()=>{
                        history.push("/login");
                    }, 2000)
                }else if(res.status===406){
                    swal("Algo deu errado 😢!", res.data.message, "error")
                    setLoading(false)
                    setMessage(res.data.message);
                    
                    
                }else{
                    swal("Algo deu errado 😢!", res.data.message, "error")
                    setLoading(false)
                    setMessage(res.data.message);
                }
            });
        }
        catch(error: any){
            setLoading(false)
            setMessage('mensagem de error')
            swal("Algo deu errado 😢!", message, "error")
        }    
    }   
    return {
        signUp, message, loading
    }
}

export default useCadastrar