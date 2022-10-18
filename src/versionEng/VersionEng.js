import React from 'react'
import BarName from '../components/BarName';
import Header from '../versionPl/Header';

import PageEng from './PageEng';
import '../styles/Navigation.scss';
import NavigationEng from './NavigationEng';


const VersionEng = () => {
    return ( 
    <>
    <div className='navi'>{<NavigationEng/>}</div>
    <BarName/>
    <header><Header/></header>
    <main><PageEng/></main>
    <footer></footer>    
    </>
     );
}
export default VersionEng;