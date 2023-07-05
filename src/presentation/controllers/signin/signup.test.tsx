import LoginComponent from '.'
import { render, screen, userEvent, fireEvent, act, renderHook } from '../../../utils/tests'
import useLogin from '../../../data/signin';

const userExpect = "valid_user" 
const passwordExpect = "valid_password" 

const makeSutLogin = ()=>{
    const Login = jest.fn().mockImplementation(LoginComponent)
    return {
        Login
    }
}

const callComponents = ()=>{
    const user = screen.getByTestId('user')
    const password = screen.getByTitle('password')
    return ({user, password})
}

describe('Componente Login', ()=>{
    test('Deve iniciar os Input vazios', async ()=>{
        const { Login } = makeSutLogin(); 
        render(<Login />)       
        const {user, password} = callComponents()

        expect(user).toHaveValue('');
        expect(password).toHaveValue('');
        
    })
    test('Deve verificar se estão sendo enviadas as informações de login', ()=>{
        const { Login } = makeSutLogin(); 
        render(<Login />)  
        const {user, password} = callComponents()

        expect(user).toHaveValue('');
        expect(password).toHaveValue('');

        fireEvent.change(user, {target: {value: userExpect}})
        fireEvent.change(password, {target: {value: passwordExpect}})

        expect(user).toHaveValue(userExpect);
        expect(password).toHaveValue(passwordExpect);
    })
    test('Deve verificar se as informações de login chegaram ao hook', async ()=>{
        const { Login } = makeSutLogin(); 
        render(<Login />)  
        const { result } = renderHook(useLogin)
        const {user, password} = callComponents()

        fireEvent.change(user, {target: {value: 'valid_user'}})
        fireEvent.change(password, {target: {value: 'valid_password'}})

        expect(user).toHaveValue('valid_user');
        expect(password).toHaveValue('valid_password');

        const button = screen.getByTitle('enviar')
        userEvent.click(button)

        act(()=>{
            result.current.signIn(user.innerText, password.innerText) 
        })

        expect(result.current.message).toEqual('mensagem de erros')
    })
})