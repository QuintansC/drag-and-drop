import CadastroComponent from '.'
import { render, screen, userEvent, fireEvent, act, renderHook } from '../../../utils/tests'
import useCadastro from '../../../data/signup';
import { addCleanup, cleanup } from '@testing-library/react-hooks';
import useLogin from '../../../data/signin';

const userExpect = "valid_user" 
const emailExpect = "valid_email" 
const passwordExpect = "valid_password" 


const makeSutCadastro = ()=>{
    const Cadastro = jest.fn().mockImplementation(CadastroComponent)
    return {
        Cadastro
    }
}

const callComponents = ()=>{
    const user = screen.getByTitle('user')
    const email = screen.getByTitle('email')
    const password = screen.getByTitle('password')
    return ({user, email, password})
}

describe('Componente Cadastro', ()=>{
    test('Deve iniciar os Input vazios', async ()=>{
        const { Cadastro } = makeSutCadastro(); 
        render(<Cadastro />)       
        const {user, password, email} = callComponents()

        expect(user).toHaveValue('');
        expect(email).toHaveValue('');
        expect(password).toHaveValue('');
        
    })
    test('Deve verificar se estão sendo enviadas as informações de cadastro', ()=>{
        const { Cadastro } = makeSutCadastro(); 
        render(<Cadastro />)  
        const {email ,user, password} = callComponents()

        expect(user).toHaveValue('');
        expect(email).toHaveValue('');
        expect(password).toHaveValue('');

        fireEvent.change(user, {target: {value: userExpect}});
        fireEvent.change(email, {target: {value: emailExpect}});
        fireEvent.change(password, {target: {value: passwordExpect}});

        expect(user).toHaveValue(userExpect);
        expect(email).toHaveValue(emailExpect);
        expect(password).toHaveValue(passwordExpect);
    })
    test('Deve verificar se as informações de cadastro chegaram ao hook', async ()=>{
        const { Cadastro } = makeSutCadastro(); 
        render(<Cadastro />)  
        const { result } = renderHook(useCadastro)
        const {user, password, email} = callComponents()

        fireEvent.change(user, {target: {value: 'valid_user'}})
        fireEvent.change(email, {target: {value: 'valid_email'}})
        fireEvent.change(password, {target: {value: 'valid_password'}})

        expect(user).toHaveValue('valid_user');
        expect(email).toHaveValue('valid_email');
        expect(password).toHaveValue('valid_password');

        const button = screen.getByTitle('conectar')
        userEvent.click(button)

        act(()=>{
            result.current.signUp(email.innerText, user.innerText, password.innerText) 
        })
        cleanup()
        expect(result.current.message).toEqual('mensagem de error')
    })
})