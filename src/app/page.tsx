"use client"
import Link from 'next/link';
import { Navbar } from '../components/dashboard/NavBar';
import { useContext, useEffect, useState } from 'react';
import styles from '../styles/home.module.css';
import { DropzoneContext } from '../utils/contexts/DropzoneContext';

export default function Home(){
  const { getToken } = useContext(DropzoneContext)
  const [Token, setToken]= useState('')
  useEffect(()=>{
    if (typeof window !== 'undefined') {
      document.title = 'Trello';
      if(window.location.pathname === '/'+sessionStorage.getItem('usernameTrello')+'/boards'){
          window.location.href = '/'+sessionStorage.getItem('usernameTrello')+'/boards'
      }
    }
  })

  useEffect(()=>{
      let token = getToken();
      if(token !== null){
          setToken(token);    
      }else{
          setToken('undefined')
      }
  }, [])

  if(Token === 'undefined'){
  return(
      <div className={styles.HomeContent}>
          <Navbar></Navbar>
          <div className={styles.Image}>
              <h2>O Trello ajuda os times a agilizar o trabalho.</h2>
              <p>Colabore, gerencie projetos e alcance novos picos de produtividade. Seja em um arranha-céu ou em home office, o jeito de trabalhar do seu time é único, e o Trello pode ajudar você a produzir cada vez mais.</p>
              <div className={styles.cadUni}>
                  <input type="text" placeholder="Email"></input> <Link href="/cadastro" className={styles.buttonAnimate}>Cadastre-se. É grátis</Link>
              </div>
          </div>
      </div>
  );}
  else{
    if (typeof window !== 'undefined') {
      let user = sessionStorage.getItem('usernameTrello');
        if(user === null){
        return <Link href="/home" />
      }
      else{
          return <Link href={`/${user}/boards`} />  
      }     
    }
  }
}