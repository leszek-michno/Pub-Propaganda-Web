import React from 'react';

export const OpenButton = (item) => {
    return (
        <div className="menu_text" key={item.id}>
          <span>{item.name}</span>
          <span>{item.price} zł </span>
        </div>
      );

}

export const OpenButtonShots = (item) => {
  return (
      <div className="menu_text" key={item.id}>
        <span>{item.name} /{item.composition}/</span>
        <span className='extraspan'>{item.price} zł</span>
        
      </div>
    );

}