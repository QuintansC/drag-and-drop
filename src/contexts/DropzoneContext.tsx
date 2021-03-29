import { createContext, ReactNode, useState } from 'react';

interface DropzoneProviderProps{
    children: ReactNode;
}

interface DropzoneContextData{
    dropzoneEnabled: boolean,
    token: string,
    enableDropzone: () => void,
    disableDropzone: () => void,
    setToken: (tokens: string) => void,
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

    function setToken(tokens: string){
        setTokens(tokens);
    }
    return(
        <DropzoneContext.Provider 
            value={{
                dropzoneEnabled,
                token,
                enableDropzone,
                disableDropzone,
                setToken, 
                             
            }}
        >
            {children}
        </DropzoneContext.Provider>
    );
}
