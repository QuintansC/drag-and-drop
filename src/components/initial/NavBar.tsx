import '../../styles/components/initial/Navbar.css';
import Trello from '../../images/Trello-Logo.svg';
import { Link } from 'react-router-dom';

export function Navbar(){
  return(
    <nav className="Navbar">
      <img src={Trello} alt="Logo" className="logo" />
        <div className="navs">
          
        </div>

        <div className="login">
            <Link 
                to="/login"
            >
                Fazer Login 
            </Link>

            <Link 
                to="/cadastro"
                className="buttonAnimate"
            >
                Cadastre-se
            </Link>
        </div>
    </nav>
  )
}