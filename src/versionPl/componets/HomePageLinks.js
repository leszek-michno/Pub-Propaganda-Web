import React from 'react'
import { NavLink } from 'react-router-dom';
import img1 from '../../images/pro4.webp'

export const NewsLink = () => {
    return ( 
        <div className='logo_links'>
        <h2>Aktualności</h2>
        <NavLink to='/polish/news'>
        <img src={img1} alt="propa logo" className="imgGray"/> 
        </NavLink>
        </div>
        );
    
}
 export const MenuLink = () => {
    return ( 
        <div className='logo_links'>
        <h2>Menu</h2> 
        <NavLink to='/polish/menu'>
        <img src={img1} alt="propa logo" /> 
        </NavLink>
        </div>
        );
    
}
 
export const ContactLink = () => {
    return ( 
        <div className='logo_links'>
        <h2>Kontakt</h2> 
        <NavLink to='/polish/contact'>
        <img src={img1} alt="propa logo" className="imgInvert"/> 
        </NavLink>
        </div>
        );
    
}

export const GalleryLink = () => {
    return ( 
        <div className='logo_links'>
         <h2>Galeria</h2> 
        <NavLink to='/photos'>
        <img src={img1} alt="propa logo" className="imgSepia"/> 
        </NavLink>
        </div>
        );
    
}