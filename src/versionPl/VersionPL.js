import React from 'react'
import BarName from '../components/BarName';
import Header from './Header';
import Navigation from './Navigation';
import Page from './Page';
import '../styles/Navigation.scss';


const VersionPl = () => {
    return ( 
    <>
    <div className='navi'>{<Navigation/>}</div>
    <BarName/>
    <header><Header/></header>
    <main><Page/></main>
    </>
     );
}
export default VersionPl;