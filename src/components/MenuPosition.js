import React from 'react';

export const OpenButton = (props) => {
    return (
        <div className="menu_text" key={props.id}>
          <span>{props.name}</span>
          <span>{props.price} zł </span>
        </div>
      );

}