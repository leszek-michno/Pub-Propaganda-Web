import React from "react";
import { ContactLink, GalleryLink, MenuLink, NewsLink } from "../componets/HomePageLinks";
import "../../styles/HomePage.scss";

const HomePage = () => {
  return (
    <>
    <h2>Jeden z najstarszych pubów na krakowskim Kazimierzu</h2>
    <div className="homepage">
      <div className="icons">
        <NewsLink />
        <MenuLink/>
        <ContactLink/>
        <GalleryLink/>  
        {/* <AboutUs/> */}
      </div>
    </div>
    </>
  );
};



export default HomePage;
