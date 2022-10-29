import React, { useState } from "react";
import { pics } from "../databases/ImgBase";
import { AiOutlineClose } from "react-icons/ai";
import '../styles/Gallery.scss'


const Gallery = () => {
  const [model, setModel] = useState(false);
  const [tempImg, setTempImg] = useState("");

  const getImg = (img) => {
    setTempImg(img);
    setModel(true);
  };
  return (
    <>
      <div className={model ? "model open" : "model"}>
        <img src={tempImg} alt="pic" onClick={() => setModel(false)} />
        <AiOutlineClose onClick={() => setModel(false)} />
      </div>  
      <div className="gallery">
        {pics.map((item) => {
          return (
            <div
              className="pics"
              key={item.id}
              onClick={() => getImg(item.img)}>
              <img src={item.img} alt="photos" style={{ width: "100%" }} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Gallery;
