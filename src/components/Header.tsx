import Menu from './Menu';
import '../styles/Header.css';
import imgNickFestaLogo from '../img/nick-festa-logo-122x113 (1).png';

function Header() {
  return (
    <header className="header-container">
      <div id="divHeader">
        <p>Loja e fabrica</p>
        <img src={ imgNickFestaLogo } alt="logo-NickFesta" />
        <p>Venda em atacado</p>
      </div>
      <Menu />
    </header>
  );
}

export default Header;
