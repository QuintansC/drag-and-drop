import '../../styles/components/NavComponents.css';
import Logout from '../../images/logout.svg';
import Gamepad from '../../images/gamepad.svg';

export function NavComponents(){
  return(
    <nav className="NavContent">
      <button className="menu" type="button"><img src="/menu.png"></img></button>
      <img src="/logo.gif" alt="Trello" className="logo" />
        <div className="links">
          <a 
            href="http://localhost:3000/"
            className="buttonAnimate"
          >
            Área de trabalho<img src="/down-arrow.png"  alt="new"/>
          </a>  

          <a 
            href="http://localhost:3000/" 
            className="buttonAnimate"
          >
            Recente<img src="/down-arrow.png" alt="save"/>
          </a>

          <a 
            href="http://localhost:3000/" 
            className="buttonAnimate"
          >
            Marcado com estrela<img src="/down-arrow.png" alt="add cart"/>
          </a>

          <button type="button"> <span>Criar</span> </button>
        </div>

        <div className="perfil">
          <a 
            href="http://localhost:3000/"
            className="buttonAnimate"
          >
            Sair <img src={Logout} alt="logout"/>
          </a>
        </div>
    </nav>
  )
}