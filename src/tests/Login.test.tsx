import Login from '../components/initial/Login'
import { render, screen, userEvent, fireEvent } from './index'
import { renderHook, act } from '@testing-library/react-hooks'
import useLogin from '../hooks/login'

const userExpect = "admin" 
const passwordExpect = "123456" 

const callComponents = ()=>{
    const user = screen.getByTestId('user')
    const password = screen.getByTitle('password')
    return ({user, password})
}

describe('Componente Login', ()=>{
    test('Deve iniciar os Input vazios', async ()=>{
        render(<Login />)       
        const {user, password} = callComponents()

        expect(user).toHaveValue('');
        expect(password).toHaveValue('');
        
    })
    test('Deve verificar se estão sendo enviadas as informações de login', ()=>{
        render(<Login />)  
        const {user, password} = callComponents()

        expect(user).toHaveValue('');
        expect(password).toHaveValue('');

        fireEvent.change(user, {target: {value: userExpect}})
        fireEvent.change(password, {target: {value: passwordExpect}})

        expect(user).toHaveValue(userExpect);
        expect(password).toHaveValue(passwordExpect);
    })
    test('Deve verificar se as informações de login', async ()=>{
        render(<Login />)  
        const {user, password} = callComponents()

        fireEvent.change(user, {target: {value: userExpect}})
        fireEvent.change(password, {target: {value: passwordExpect}})

        expect(user).toHaveValue(userExpect);
        expect(password).toHaveValue(passwordExpect);

        const button = screen.getByText('Fazer Login')
        userEvent.click(button)
        
        const response = await screen.findByText('Usuario não existe')
        expect(response).toBeInTheDocument()
    })
})