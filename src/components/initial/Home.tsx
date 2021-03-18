import { Link } from 'react-router-dom';
import '../../styles/components/initial/Home.css';
import { Navbar } from './NavBar';
export default function Home(){
    return(
        <div className="HomeContent">
            <Navbar></Navbar>
            <div className="Image">
                <h2>O Trello ajuda os times a agilizar o trabalho.</h2>
                <p>Colabore, gerencie projetos e alcance novos picos de produtividade. Seja em um arranha-céu ou em home office, o jeito de trabalhar do seu time é único, e o Trello pode ajudar você a produzir cada vez mais.</p>
                <div className="cadUni">
                    <input type="text" placeholder="Email"></input> <Link to="/cadastro" className="buttonAnimate">Cadastre-se. É grátis</Link>
                </div>
            </div>
        </div>
    );
}