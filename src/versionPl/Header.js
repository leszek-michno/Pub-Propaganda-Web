import React from 'react';
import '../styles/Header.scss';
import { Route, Routes } from "react-router-dom";

const Img1 = () => <img src={process.env.PUBLIC_URL + "/images/redHeads.png"} alt="propa" className="imgSepia"/>;
const Img2 = () => <img src={process.env.PUBLIC_URL + "/images/redHeads.png"} alt="propa" className="imgGray"/>;
const Img3 = () => <img src={process.env.PUBLIC_URL + "/images/redHeads.png"} alt="propa" className="imgSepia"/>;
const Contact = () => <iframe title="Propaganda" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2561.789085723698!2d19.941604715608353!3d50.052782223819655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b6afe1cf8bf%3A0xc565cb891f25209f!2sPUB%20Propaganda!5e0!3m2!1spl!2spl!4v1662061083170!5m2!1spl!2spl"></iframe>;
const Img5 = () => <img src={process.env.PUBLIC_URL + "/images/redHeads.png"} alt="propa"/>;

const Header = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<Img1 />} />
        <Route path="news" element={<Img2 />} />
        <Route path="menu" element={<Img3 />} />
        <Route path="contact" element={<Contact />} />
        <Route path="photos" element={<Img5 />} />
        <Route path="aboutUs" element={<Img5 />} />
      </Routes>
    </>
  );
};
export default Header;