import React from 'react'
import { NavLink } from 'react-router-dom';
import img1 from '../../images/pro4.webp'

export const NewsLink = () => {
    return ( 
        <div className='logo_links'>
        <h2>News</h2>
        <NavLink to='/english/news_Eng'>
        <img src={img1} alt="propa logo" className="imgGray"/> 
        </NavLink>
        </div>
        );
    
}
 export const MenuLink = () => {
    return ( 
        <div className='logo_links'>
        <h2>Menu</h2> 
        <NavLink to='/english/menu_Eng'>
        <img src={img1} alt="propa logo" /> 
        </NavLink>
        </div>
        );
    
}
 
export const ContactLink = () => {
    return ( 
        <div className='logo_links'>
        <h2>Contact</h2> 
        <NavLink to='/english/contact_Eng'>
        <img src={img1} alt="propa logo" className="imgInvert"/> 
        </NavLink>
        </div>
        );
    
}

export const GalleryLink = () => {
    return ( 
        <div className='logo_links'>
         <h2>Gallery</h2> 
        <NavLink to='/english/photos_Eng'> 
        <img src={img1} alt="propa logo" className="imgSepia"/> 
        </NavLink>
        </div>
        );
    
}