import { useState, useEffect } from 'react';
import '../styles/Footer.css';

function Footer() {
  const [ano, setAno] = useState('');
  useEffect(() => {
    function getAnoAtual() {
      const dataAtual = new Date();
      setAno(dataAtual.getFullYear().toString());
    }
    getAnoAtual();
  }, []);
  return (
    <footer className="footer-container">
      <div>
        <p>
          &copy;
          {` Copyright - ${ano} - Todos os direitos reservados`}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
