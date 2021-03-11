
import '../styles/NavComponents.css';
import More from './../images/more.svg';
import Save from './../images/save.svg';
import Note from './../images/noteadd.svg';
import Logout from './../images/logout.svg';

import Gamepad from './../images/gamepad.svg';
import { useEffect, useState } from 'react';


export function NavComponents(){

  const [animateButton, setAnimateButton] = useState(false);

  function newArchive(){
    
  }

  async function buttonAnimate({target}: any) {
    animateButton?setAnimateButton(false):setAnimateButton(true);
    await target.classList.add('buttonAnimate');
  }

 async function buttonAnimateDown({target}: any) {
    animateButton?setAnimateButton(false):setAnimateButton(true);
    await target.classList.remove('buttonAnimate');
  }

  async function removeClass({target}:any) {
    await target.classList.remove('buttonAnimate');
  }

  return(
    <nav className="NavContent">
      <img src={Gamepad} alt="Logo" className="logo" />
        <div className="comp">
          <a 
            href="http://localhost:3000/"
            onMouseEnter={buttonAnimate} 
            onMouseLeave={buttonAnimateDown} 
            onClick={newArchive}
          >
            Novo<img src={More} onMouseMove={removeClass} alt="new"/>
          </a>  

          <a 
            href="http://localhost:3000/" 
            onMouseEnter={buttonAnimate} 
            onMouseLeave={buttonAnimateDown}
          >
            Salvar<img src={Save} onMouseMove={removeClass} alt="save"/>
          </a>

          <a 
            href="http://localhost:3000/" 
            onMouseEnter={buttonAnimate} 
            onMouseLeave={buttonAnimateDown}
          >
            Adicionar um card<img src={Note} onMouseMove={removeClass} alt="add card"/>
          </a>
        </div>

        <div className="perfil">
          <a 
            href="http://localhost:3000/"
            onMouseEnter={buttonAnimate} 
            onMouseLeave={buttonAnimateDown}
          >
            Sair <img src={Logout} onMouseMove={removeClass} alt="logout"/>
          </a>
        </div>
    </nav>
  )
}