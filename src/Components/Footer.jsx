import React from 'react';
import Logo from '../images/logo.svg'
import '../Styles/Footer.css'
import facebookIcon from '../images/icon-facebook.svg'
import twitterIcon from '../images/icon-twitter.svg'
import pinterestIcon from '../images/icon-pinterest.svg'
import instagramIcon from '../images/icon-instagram.svg'
export default function Footer() {

  return <div className='FooterContainer'>
      <img src={Logo} />
      <a href='#'>about</a>
      <a href='#'>careers</a>
      <a href='#'>events</a>
      <a href='#'>products</a>
      <a href='#'>support</a>
      <div className='socialMedia'>
          <img src={facebookIcon} />
          <img src={twitterIcon} />
          <img src={pinterestIcon} />
          <img src={instagramIcon} />
      </div>
      <p>©2021 Loopstudios. All rights reserved.</p>
  </div>;
}
