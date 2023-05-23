import { PL } from 'country-flag-icons/react/3x2';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import {AiOutlineMenu} from 'react-icons/ai';
import '../styles/Navigation.scss';

const NavigationEng = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  const list = [
    { name: "start", path: "/english" },
    { name: "news", path: "news_Eng" },
    { name: "menu", path: "menu_Eng" },
    { name: "contact", path: "contact_Eng" },
    { name: "gallery", path: "photos_Eng" },
    { name: <PL className="navi_flags"/>, path: "/polish" },
  ];

  const menu = list.map((item) => (
    <li   key={item.name}>
      <NavLink onClick={toggleNav} to={item.path}>{item.name}</NavLink>
    </li>
  ));

  return (
    <nav className="list">
    <img src={process.env.PUBLIC_URL + '/images/pro4.webp'} alt="logo" className="logo"/>
      {(toggleMenu || screenWidth > 600) && <ul>{menu}</ul>}  
      <button onClick={toggleNav} className="btn"><AiOutlineMenu/></button>
    </nav>
  
  );
};

export default NavigationEng;