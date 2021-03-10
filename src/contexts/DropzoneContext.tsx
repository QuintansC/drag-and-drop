import { createContext, ReactNode, useState } from 'react';

interface DropzoneProviderProps{
    children: ReactNode;
}

interface DropzoneContextData{
    dropzoneEnabled: boolean,
    enableDropzone: () => void,
    disableDropzone: () => void,
}
export const DropzoneContext = createContext({} as DropzoneContextData);

export function DropzoneProvider({children}: DropzoneProviderProps){
    const [dropzoneEnabled, setDropzoneEnabled] = useState(false);
    function enableDropzone(){
        setDropzoneEnabled(true);
    }

    function disableDropzone(){
        setDropzoneEnabled(false);
    }
    return(
        <DropzoneContext.Provider 
            value={{
                dropzoneEnabled,
                enableDropzone,
                disableDropzone,              
            }}
        >
            {children}
        </DropzoneContext.Provider>
    );
}
