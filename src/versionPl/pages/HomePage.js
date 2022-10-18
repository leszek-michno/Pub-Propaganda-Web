import React from "react";
import { ContactLink, GalleryLink, MenuLink, NewsLink } from "../componets/HomePageLinks";
import "../../styles/HomePage.scss";

const HomePage = () => {
  return (
    <div className="homepage">
      <h2>Miejsce nie dla wszystkich</h2>
      <div className="icons">
        <NewsLink />
        <MenuLink/>
        <ContactLink/>
        <GalleryLink/>  
      </div>
    </div>
  );
};



export default HomePage;
