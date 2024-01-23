import React from "react";
import { NavLink } from "react-router-dom";

export const NewsLink = () => {
  return (
    <div className="logo_links">
      <NavLink to="/english/news_Eng">
        <h2>News</h2>
        <img src={process.env.PUBLIC_URL + '/images/pro4.webp'} alt="propa logo" className="imgGray" />
      </NavLink>
    </div>
  );
};
export const MenuLink = () => {
  return (
    <div className="logo_links">
      <NavLink to="/english/menu_Eng">
        <h2>Menu</h2>
        <img src={process.env.PUBLIC_URL + '/images/pro4.webp'} alt="propa logo" />
      </NavLink>
    </div>
  );
};

export const ContactLink = () => {
  return (
    <div className="logo_links">
      <NavLink to="/english/contact_Eng">
        <h2>Contact</h2>
        <img src={process.env.PUBLIC_URL + '/images/pro4.webp'} alt="propa logo" className="imgInvert" />
      </NavLink>
    </div>
  );
};

export const GalleryLink = () => {
  return (
    <div className="logo_links">
      <NavLink to="/english/photos_Eng">
        <h2>Gallery</h2>
        <img src={process.env.PUBLIC_URL + '/images/pro4.webp'} alt="propa logo" className="imgSepia" />
      </NavLink>
    </div>
  );
};
