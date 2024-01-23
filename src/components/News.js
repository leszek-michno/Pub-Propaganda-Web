import React from 'react';

const News = (item) => {
    return (
      <div className="news">
      <div className="newpage">
        <p>{item.title}{" "}</p>
        <img src={item.img} alt="logo" />
        <span>{item.text}</span>  
      </div>
    </div>
    );
  };
  
  export default News; 