import api from '../services/api';
import { useHistory } from 'react-router-dom';

const useCadastrar = ()=>{
    const history = useHistory();

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

    return {
        signUp
    }
}

export default useCadastrar