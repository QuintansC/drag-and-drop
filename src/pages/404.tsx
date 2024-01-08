"use client"
import { useRouter } from 'next/navigation'

export default function Error (){
    const router = useRouter()
    if(typeof window !== 'undefined' && window.location.pathname === '/'+sessionStorage.getItem('usernameTrello')+'/boards'){
        router.push('/'+sessionStorage.getItem('usernameTrello')+'/boards')
    }
    else{
        if(typeof window !== 'undefined'){
            router.push('/')
        }
    }
    return <div></div>
}