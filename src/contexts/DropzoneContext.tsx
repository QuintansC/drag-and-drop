import { createContext, ReactNode, useEffect, useState } from 'react';

interface DropzoneProviderProps{
    children: ReactNode;
}

interface DropzoneContextData{
    dropzoneEnabled: boolean,
    token: string,
    enableDropzone: () => void,
    disableDropzone: () => void,
    setToken: (tokens: string, name: string) => void,
    getToken: () => string,
}
export const DropzoneContext = createContext({} as DropzoneContextData);

//Contextos da aplicação
export function DropzoneProvider({children}: DropzoneProviderProps){
    const [dropzoneEnabled, setDropzoneEnabled] = useState(false);
    const [token, setTokens] = useState('');

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
                enableDropzone,
                disableDropzone,
                setToken,
                getToken                             
            }}
        >
            {children}
        </DropzoneContext.Provider>
    );
}
