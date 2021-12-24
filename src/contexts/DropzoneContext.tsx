import { createContext, Dispatch, ReactChildren, ReactNode, useEffect, useState } from 'react';

interface DropzoneProviderProps{
    children: ReactNode;
}

interface DropzoneContextData{
    dropzoneEnabled: boolean,
    token: string,
    open: boolean,
    enableDropzone: () => void,
    disableDropzone: () => void,
    setToken: (tokens: string, name: string) => void,
    getToken: () => string,
    setOpen: (value: boolean)=> void,
}
export const DropzoneContext = createContext({} as DropzoneContextData);

//Contextos da aplicação
export function DropzoneProvider({children}: DropzoneProviderProps){
    const [dropzoneEnabled, setDropzoneEnabled] = useState(false);
    const [token, setTokens] = useState('');
    const [open, setOpened] = useState(true);

    function setOpen(value: boolean){
        setOpened(value);
        console.log(value)
    }

    function enableDropzone(){
        setDropzoneEnabled(true);
    }

    function disableDropzone(){
        setDropzoneEnabled(false);
    }

    function setToken(tokens: string, name: string){
        //Setar nos cookies
        setTokens(tokens);
        sessionStorage.setItem('tokenTrello', tokens)
        sessionStorage.setItem('usernameTrello', name)
    }

    function getToken(){
        var token = sessionStorage.getItem('tokenTrello');
        setTokens(token?token:'undefined');
        return token?token:'undefined';
    }
    return(
        <DropzoneContext.Provider 
            value={{
                dropzoneEnabled,
                token,
                open,
                enableDropzone,
                disableDropzone,
                setToken,
                getToken,
                setOpen                         
            }}
        >
            {children}
        </DropzoneContext.Provider>
    );
}
