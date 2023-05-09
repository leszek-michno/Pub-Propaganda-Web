import React from 'react';

export const OpenButton = (item) => {
    return (
        <div className="menu_text" key={item.id}>
          <span>{item.name}</span>
          <span>{item.price} zł </span>
        </div>
      );

}