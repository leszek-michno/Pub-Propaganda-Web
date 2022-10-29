import React from 'react'
import BarName from '../components/BarName';
import PageEng from './PageEng';
import '../styles/Navigation.scss';
import NavigationEng from './NavigationEng';
import HeaderEng from './HeaderEng';


const VersionEng = () => {
    return ( 
    <>
    <div className='navi'>{<NavigationEng/>}</div>
    <BarName/>
    <header><HeaderEng/></header>
    <main><PageEng/></main>
    <footer></footer>    
    </>
     );
}
export default VersionEng;