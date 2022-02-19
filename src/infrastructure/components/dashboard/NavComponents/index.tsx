import styles from './styles.module.scss';
import { useContext, useState } from 'react';
import { DropzoneContext } from '../../../../utils/contexts/DropzoneContext';

import { FaBell, FaRegBell, FaUserAlt } from 'react-icons/fa';

import { BiInfoCircle } from 'react-icons/bi';

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
          <a 
            href="#"
            className={styles.buttonAnimate}
            onClick={()=>{
              setOpenMenu(!openMenu);
            }}
          >
            Área de trabalho<img src="/down-arrow.png"  alt="new"/>
          </a> 
          <ul style={openMenu?{ display: 'block'}:{display: 'none'}}>
            <li className={styles.closeDropDown}> X </li>
            <span>Suas Áreas de trabalho</span>
            <li>Clone Trello</li>
            <li>Metrocomm</li>
            <span>Áreas de trabalho do convidado</span>
            <li>Evandro Ribeiro</li>
          </ul> 
        </div>
        <a 
          href="http://localhost:3000/" 
          className={styles.buttonAnimate}
        >
          Recente<img src="/down-arrow.png" alt="save"/>
        </a>

        <a 
          href="http://localhost:3000/" 
          className={styles.buttonAnimate}
        >
          Marcado com estrela<img src="/down-arrow.png" alt="add cart"/>
        </a>

        <button type="button"> <span>Criar</span> </button>
      </div>

      <div className={styles.perfil}>
        <input type="search" name="searchNav" id={styles.searchNav} />
        <button className={styles.buttonOption}><BiInfoCircle size={20}/></button>
        <button className={styles.buttonOption} onClick={()=>setHaveNotify(!haveNotify)}>{haveNotify === true?<FaBell size={17}/>:<FaRegBell size={17}/>}</button>
        <button className={styles.buttonUser} onClick={sair}><FaUserAlt size={15}/></button>
      </div>
    </nav>
  )
}