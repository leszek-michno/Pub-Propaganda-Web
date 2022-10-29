import React from 'react';

const News = (props) => {
    return (
      <div className="news">
      <div className="newpage">
        <p>{props.title}{" "}</p>
        <img src={props.img} alt="logo" />
        <span>{props.text}</span>  
      </div>
    </div>
    );
  };
  
  export default News;