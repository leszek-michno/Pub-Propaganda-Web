import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from '../MainPage';
import VersionEng from '../versionEng/VersionEng';
import VersionPl from '../versionPl/VersionPL';

const Pages = () => {
    return (
    <Router>
    <Routes>
    <Route path='/' element={<MainPage/>}/>    
    <Route path='/polish/*' element={<VersionPl/>}/>
    <Route path='/english/*' element={<VersionEng/>}/>
    </Routes>
    </Router>
      );
}
 
export default Pages;