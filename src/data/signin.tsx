import { useState, useContext } from 'react';
import api from '../utils/api';
import { useHistory } from 'react-router-dom';
import { DropzoneContext } from '../utils/contexts/DropzoneContext';
import swal from 'sweetalert';

const useLogin = ()=>{
    const history = useHistory();
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false)
    const { setToken } = useContext(DropzoneContext);
    
    async function signIn (login:string , senha:string){
        setLoading(true)
        try{
            await api.post('/login',{
                user: login.toLocaleLowerCase(),
                password: senha,
            }).then(function(res){    
                //console.log(res.data)            
                setToken(res.data.token, login.toLocaleLowerCase())
                setMessage(res.data.message)   
                setLoading(false)
                history.push(`${login}/boards`)            
            }).catch(function(err){
                const message: string = err.response.data.message;
                console.log(err.response.data)
                setMessage(message)
                setLoading(false)
                swal("Algo deu errado 😢!", message, "error")
            })
        }
        catch(error: any){
            setLoading(false)
            setMessage('mensagem de erros');
            swal("Algo deu errado 😢!", error.message, "error")
        }
    }    
    return {
        signIn, message, loading
    }
}


export default useLogin;