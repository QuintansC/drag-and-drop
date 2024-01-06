"use client"
import styles from './styles.module.css';
import { useContext, useState } from 'react';
import { DropzoneContext } from '../../../utils/contexts/DropzoneContext';

import { FaBell, FaRegBell, FaUserAlt } from 'react-icons/fa';

import { BiInfoCircle } from 'react-icons/bi';
import  Link  from 'next/link';

export function NavComponents(props: any){
  const { open, setOpen } = useContext(DropzoneContext)
  const [openMenu, setOpenMenu] = useState(false)
  const [haveNotify, setHaveNotify] = useState(false)
  function sair(){
    sessionStorage.clear();
    window.location.href = '/home';
  }
  return(
    <nav className={styles.NavContent}>
      <button onClick={()=>{
        setOpen(!open);
      }} 
      className={styles.menu} type="button"><img src="/menu.png" alt=""></img></button>
      <img src="/logo.gif" alt="Trello" className={styles.logo} />
      <div className={styles.links}>
        <div>
          <Link 
            href='#'
            className={styles.buttonAnimate}
            onClick={()=>{
              setOpenMenu(!openMenu);
            }}
          >
            Área de trabalho<img src="/down-arrow.png"  alt="new"/>
          </Link> 
          <ul style={openMenu?{ display: 'block'}:{display: 'none'}}>
            <li className={styles.closeDropDown}><div /> Área de trabalo <b> X </b></li>
            <span>Suas Áreas de trabalho</span>
            <li><Link href='#'> Clone Trello </Link></li>
            <li><Link href='#'>Metrocomm </Link></li>
            <span>Áreas de trabalho do convidado</span>
            <li><Link href='#'>Evandro Ribeiro</Link></li>
          </ul> 
        </div>
        <Link 
          href="http://localhost:3000/" 
          className={styles.buttonAnimate}
        >
          Recente<img src="/down-arrow.png" alt="save"/>
        </Link>

        <Link 
          href="http://localhost:3000/" 
          className={styles.buttonAnimate}
        >
          Marcado com estrela<img src="/down-arrow.png" alt="add cart"/>
        </Link>

        <button type="button"> <span>Criar</span> </button>
      </div>

      <div className={styles.perfil}>
        <input placeholder="🔎    Pesquisar" type="search" name="searchNav" id={styles.searchNav} />
        <button className={styles.buttonOption}><BiInfoCircle size={20}/></button>
        <button className={styles.buttonOption} onClick={()=>setHaveNotify(!haveNotify)}>{haveNotify === true?<FaBell size={17}/>:<FaRegBell size={17}/>}</button>
        <button className={styles.buttonUser} onClick={sair}><FaUserAlt size={15}/></button>
      </div>
    </nav>
  )
}