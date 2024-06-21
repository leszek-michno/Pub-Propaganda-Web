import React from 'react'
import { NavLink } from 'react-router-dom';

export const NewsLink = () => {
    return ( 
        <div className='logo_links'>
        <NavLink to='/polish/news'>
        <h2>Aktualności</h2>
        <img src={process.env.PUBLIC_URL + '/images/pro4.webp'} alt="propa logo" className="imgGray" loading='lazy'/> 
        </NavLink>
        </div>
        );
    
}
 export const MenuLink = () => {
    return ( 
        <div className='logo_links'> 
        <NavLink to='/polish/menu'>
        <h2>Menu</h2>    
        <img src={process.env.PUBLIC_URL + '/images/pro4.webp'} alt="propa logo" loading='lazy'/> 
        </NavLink>
        </div>
        );
    
}
 
export const ContactLink = () => {
    return ( 
        <div className='logo_links'> 
        <NavLink to='/polish/contact'>
        <h2>Kontakt</h2>        
        <img src={process.env.PUBLIC_URL + '/images/pro4.webp'} alt="propa logo" className="imgInvert" loading='lazy'/> 
        </NavLink>
        </div>
        );
    
}

export const GalleryLink = () => {
    return ( 
        <div className='logo_links'> 
        <NavLink to='/polish/photos'>
        <h2>Galeria</h2>    
        <img src={process.env.PUBLIC_URL + '/images/pro4.webp'} alt="propa logo" className="imgSepia" loading='lazy'/> 
        </NavLink>
        </div>
        );
    
}

// export const AboutUs = () => {
//     return ( 
//         <div className='logo_links'> 
//         <NavLink to='/polish/aboutUs'>
//         <h2>O nas</h2>    
//         <img src={img1} alt="propa logo" /> 
//         </NavLink>
//         </div>
//         );
    
// }