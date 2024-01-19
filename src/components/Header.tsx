import '../styles/Header.css';
import imgNickFestaLogo from '../img/nick-festa-logo-122x113 (1).png';

function Header() {
  return (
    <header className="header-container">
      <p>Loja e fabrica</p>
      <img src={ imgNickFestaLogo } alt="logo-NickFesta" />
      <p>Venda em atacado</p>
    </header>
  );
}

export default Header;
