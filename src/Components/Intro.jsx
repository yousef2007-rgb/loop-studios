import React,{useState} from 'react';
import '../Styles/Intro.css'
import menuIcon from '../images/icon-hamburger.svg'
import Logo from '../images/logo.svg'
import closeIcon from '../images/icon-close.svg'
export default function Header() {
  const [menuVisablity, setMenuVisablity] = useState("hide")
  return <div className='background'>
  <div className='IntroContainer'>
      <div className='Header'>
      <img className='Logo' src={Logo} />
      <div className='Nav'>
          <a href='#'>about</a>
          <a href='#'>careers</a>
          <a href='#'>events</a>
          <a href='#'>products</a>
          <a href='#'>support</a>
        </div>
      <div className='menuIcon' onClick={()=> {
        setMenuVisablity("show")
      }}><img src={menuIcon}/></div>
      </div>
      <div id={menuVisablity} className='menu'>
        <div className='menuHeader'>
        <img className='Logo' src={Logo} />
        <div className='menuIcon' onClick={()=> {
        setMenuVisablity("hide")
      }}><img src={closeIcon}/></div>
        </div>
        <div className='menuNav'>
          <a href='#'>about</a>
          <a href='#'>careers</a>
          <a href='#'>events</a>
          <a href='#'>products</a>
          <a href='#'>support</a>
        </div>
      </div>
      <div className='introStatment'>
        <h1>immersive</h1>
        <h1>experiences</h1>
        <h1>that</h1>
        <h1>deliver</h1>
      </div>
  </div>
  </div>;
}
