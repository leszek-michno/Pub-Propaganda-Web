import React from 'react';
import BarName from './components/BarName';
import LinkVersionPl from './components/LinkVerionPl';
import LinkVersionEng from './components/LinkVersionEng';
import './styles/MainPage.scss'

const MainPage = () => {
    return ( 
        <div className='mainPage'>
            <BarName/>
            <br />
            <h3>Miejsce nie dla wszystkich</h3>
            <LinkVersionPl/>
            <h3>Place not for everybody</h3>
            <LinkVersionEng/>     
        </div>

     );
}

export default MainPage;