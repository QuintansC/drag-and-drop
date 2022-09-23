import { ReactNode } from "react";
import styles from './styles.module.scss';
import { useContext } from 'react';
import { DropzoneContext } from '../../../../utils/contexts/DropzoneContext';

type ContainerProps ={
    children: ReactNode
}

export function Container({children}: ContainerProps){
    const { open } = useContext(DropzoneContext)
    return (
        <>
            <div className={open?styles.HomeContentOpened: styles.HomeContentClosed}>
                {children}
            </div>
        </>
    )
}