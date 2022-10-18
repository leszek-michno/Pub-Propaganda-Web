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
            <h3>Jeden z najstarszych pubów na krakowskim Kazimierzu</h3>
            <LinkVersionPl/>
            <h3>One of the oldest pubs in Krakow's Kazimierz</h3>
            <LinkVersionEng/>     
        </div>

     );
}

export default MainPage;