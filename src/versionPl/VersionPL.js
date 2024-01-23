import React from 'react'
import BarName from '../components/BarName';
import Header from './Header';
import Navigation from './Navigation';
import Page from './Page';
import '../styles/Navigation.scss';
import Note from './pages/NotificationBar';


const VersionPl = () => {
    return ( 
    <>
    <div className='navi'>{<Navigation/>}</div>
    <BarName/>
    <header><Header/></header>
    <main>
        <Note/>
        <Page/>
    </main>
    </>
     );
}
export default VersionPl;