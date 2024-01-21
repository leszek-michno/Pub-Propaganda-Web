import React from 'react';
import '../styles/Footer.scss'

const Footer = () => {
    return (
        <div className='footer'>
          <div className='container'>
          <p>Copyright &copy; {new Date().getFullYear()} Propaway</p>
          </div>
        </div>
      );
}
 
export default Footer;