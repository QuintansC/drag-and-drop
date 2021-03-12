
import '../../styles/components/initial/Navbar.css';
import Logout from '../../images/logout.svg';

import Gamepad from '../../images/gamepad.svg';
import {useState } from 'react';
import { Link } from 'react-router-dom';



export function Navbar(){

  const [animateButton, setAnimateButton] = useState(false);

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
    <nav className="Navbar">
      <img src={Gamepad} alt="Logo" className="logo" />
        <div className="navs">
          
        </div>

        <div className="login">
            <Link 
                to="/login"
                onMouseEnter={buttonAnimate} 
                onMouseLeave={buttonAnimateDown}
            >
                Login <img src={Logout} onMouseMove={removeClass} alt="logout"/>
            </Link>

            <Link 
                to="/cadastro"
                onMouseEnter={buttonAnimate} 
                onMouseLeave={buttonAnimateDown}
            >
                Cadastre-se <img src={Logout} onMouseMove={removeClass} alt="logout"/>
            </Link>
        </div>
    </nav>
  )
}