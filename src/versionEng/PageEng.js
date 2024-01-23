import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePageEng from '../versionEng/pagesEng/HomePageEng'; 
import NewsPageEng from '../versionEng/pagesEng/NewsPageEng'; 
import ContactPageEng from "./pagesEng/ContactPageEng";
import MenuPageEng from './pagesEng/MenuPageEng';
import MainPage from "../MainPage";
import PhotosEng from "./pagesEng/PhotosEng";


const PageEng = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePageEng/>} />
      <Route path="/news_Eng" element={<NewsPageEng/>} />
      <Route path="/menu_Eng" element={<MenuPageEng/>} />
      <Route path="/contact_Eng" element={<ContactPageEng />} />
      <Route path="/photos_Eng" element={<PhotosEng/>} />
      <Route path="/" element = {<MainPage/>}/>
    </Routes>
  );
};
export default PageEng;
