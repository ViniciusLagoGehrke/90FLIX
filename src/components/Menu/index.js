import React from 'react';
import Logo from '../../assets/img/logo.png';
import './Menu.css';
import Button from '../Button'
/*import ButtonLink from './components/ButtonLink';*/

export default function Menu(){
  return(
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="UBIFLIX logo"/>
      </a>

      <Button as="a" className="ButtonLink" href="/">
        Novo Vídeo
      </Button>
    </nav>
  );
}