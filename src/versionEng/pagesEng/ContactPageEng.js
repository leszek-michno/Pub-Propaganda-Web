import React from "react";
import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineMail,
  AiOutlineGoogle,
} from "react-icons/ai";
import '../../styles/Contact.scss';

const ContactPageEng = () => {
  return (
    <>
      <h1 className="menu_title">Contact </h1>
      <div className="contact">
      <div>
      <h2>Pub Propaganda</h2>
      <p> Miodowa str 20</p>
      <p>31-055 Krakow</p>
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
        <a href={"mailto:contact@pubpropaganda.eu"}>
          <AiOutlineMail />
        </a>
        <h2>pub opening hours</h2>
        <span> from Monday to Thursday: </span>
        <span>from 5 pm to 2 am</span>
        <br />
        <span> on Friday and Saturday: </span>
        <span> from 6 pm to 4 am</span>
        <br />
        <span>on Sunday: </span>
        <span> from 6 pm to 2 am</span>
      </div>
    </>
  );
};

export default ContactPageEng;
