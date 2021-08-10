import { fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Login from '../components/initial/Login'
import { render, screen } from './index'

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

    test('Deve testar se o click chama o hook Auth', async ()=>{
        render(<Login />)  
        const {user, password} = callComponents()

        expect(user).toHaveValue('');
        expect(password).toHaveValue('');

        fireEvent.change(user, {target: {value: userExpect}})
        fireEvent.change(password, {target: {value: passwordExpect}})

        expect(user).toHaveValue(userExpect);
        expect(password).toHaveValue(passwordExpect);

        const button = screen.getByText('Fazer Login')
        userEvent.click(button)

        expect(await screen.findByText('mensagem de erros')).toBeInTheDocument()
    })
})