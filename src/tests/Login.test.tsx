import LoginComponent from '../components/initial/Login'
import { render, screen, userEvent, fireEvent } from './index'

const userExpect = "admin" 
const passwordExpect = "123456" 

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
        const {user, password} = callComponents()

        fireEvent.change(user, {target: {value: 'Quintans'}})
        fireEvent.change(password, {target: {value: '123456'}})

        expect(user).toHaveValue('Quintans');
        expect(password).toHaveValue('123456');

        const button = screen.getByText('Fazer Login')
        userEvent.click(button)
    
        const response = await screen.findByText('mensagem de erros')
        expect(response).toBeInTheDocument()
    })
})