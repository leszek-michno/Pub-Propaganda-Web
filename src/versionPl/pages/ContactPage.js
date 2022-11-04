import React from "react";
import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineMail,
  AiOutlineGoogle,
} from "react-icons/ai";
import '../../styles/Contact.scss';

const ContactPage = () => {
  return (
    <>
    
      <h1 className="menu_title">Kontakt z nami </h1>
      <div className="contact">
      <div>
      <h2>Pub Propaganda</h2>
      <p>ul. Miodowa 20</p>
      <p>31-055 Kraków</p>
      </div>
        <a
          href={"https://www.facebook.com/propapub"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineFacebook />
        </a>
        <a
          href={"https://www.instagram.com/pub_propaganda/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineInstagram />
        </a>
        <a
          href={"https://pubpropaganda.business.site/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineGoogle />
        </a>
        <a href={"mailto:propaway@propashop.pl"}>
          <AiOutlineMail />
        </a>
        <h2>Godziny otwarcia lokalu</h2>
        <span> od poniedziałku do czwartku: </span>
        <span>od godz 17.00 do godz 02.00</span>
        <br />
        <span>w piątek i sobotę: </span>
        <span>od godz 18.00 do godz 04.00</span>
        <br />
        <span>niedziela: </span>
        <span>od godz 18.00 do godz 02.00</span>
      </div>
    </>
  );
};

export default ContactPage;
