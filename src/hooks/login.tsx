import { useState, useContext } from 'react';
import api from '../services/api';
import { useHistory } from 'react-router-dom';
import { DropzoneContext } from '../contexts/DropzoneContext';
import swal from 'sweetalert';

const useLogin = ()=>{
    const history = useHistory();
    const [message, setMessage] = useState('');
    const { setToken } = useContext(DropzoneContext);
    
    async function signIn (login:string , senha:string){
        try{
            var result = await api.post('/login',{
                user: login.toLocaleLowerCase(),
                password: senha,
            }).then(function(res){    
                //console.log(res.data)            
                setToken(res.data.token, login.toLocaleLowerCase())
                setMessage(res.data.message)   
                history.push(`${login}/boards`)            
            }).catch(function(err){
                console.log(err.response.data)
                setMessage(err.response.data.message)
                swal("Oops!", err.response.data.message, "error")
            })
        }
        catch(e: any){
            swal("Oops!", e, "error")
            setMessage('mensagem de erros');
        }
    }    
        

    return {
        signIn, message
    }
}


export default useLogin;