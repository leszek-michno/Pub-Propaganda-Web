import React from 'react';

export const BottleBeer = (props) => {
    return (
        <div className="menu_text" key={props.id}>
          <span>{props.name}</span>
          <span>{props.price} zł </span>
        </div>
      );

}

export const DraftBeer = (props) => {
  return (
      <div className="menu_text" key={props.id}>
        <span>{props.name}</span>
        <span>{props.price} zł </span>
      </div>
    );

}

export const WheatBeer = (props) => {
  return (
      <div className="menu_text" key={props.id}>
        <span>{props.name}</span>
        <span>{props.price} zł </span>
      </div>
    );

}

export const NoAlcoBeer = (props) => {
  return (
      <div className="menu_text" key={props.id}>
        <span>{props.name}</span>
        <span>{props.price} zł </span>
      </div>
    );

}
export const StrongAlco = (props) => {
    return (
        <div className="menu_text" key={props.id}>
          <span>{props.name}</span>
          <span>{props.price} zł </span>
        </div>
      );
  
  }
  export const Wins = (props) => {
    return (
        <div className="menu_text" key={props.id}>
          <span>{props.name}</span>
          <span>{props.price} zł </span>
        </div>
      );
  
  }
  export const NoAlco = (props) => {
    return (
        <div className="menu_text" key={props.id}>
          <span>{props.name}</span>
          <span>{props.price} zł </span>
        </div>
      );
  
  }