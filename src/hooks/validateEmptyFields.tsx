const validate = ()=>{
    
    function validateEmail (email:string): boolean{
        if(email !== ''){
            var regular = /\S+@\S+\.\S+/;
            return regular.test(email);
        }else{
            return false
        }
    }  
    
    function validatePassword(password: string): string{
        if(password !== ''){
            return password
        }else{
            return 'Insira uma senha'
        }
        
    }
    
    return {
        validateEmail, validatePassword
    }
}


export default validate;