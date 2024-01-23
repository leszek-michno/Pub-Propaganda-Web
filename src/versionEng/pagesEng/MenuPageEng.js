import React, { useState } from "react";
import "../../styles/Menu.scss";
import {
  draftBeer,
  bottleBeer,
  bottleWheatBeer,
  noAlcoBeer,
  strongAlco,
  wins,
  noAlco,
  shotsEng, 
  coctailsEng
} from "../../databases/MenuBase";
import { OpenButton, OpenButtonShots } from "../../components/MenuPosition";

const MenuPageEng = () => {
  const [isVisibleDraftBeer, setIsVisibleDraftBeer] = useState();
  const [isVisibleBottelBeer, setIsVisibleBottleBeer] = useState();
  const [isVisibleWheatBeer, setIsVisibleWheatBeer] = useState();
  const [isVisibleNoAlcoBeer, setIsVisibleNoAlcoBeer] = useState();
  const [isVisibleStrongAlco, setIsVisibleStrongAlco] = useState();
  const [isVisibleWins, setIsVisibleWins] = useState();
  const [isVisibleNoAlco, setIsVisibleNoAlco] = useState();
  const [isShots, setShots] = useState();
  const [isCoctails, setIsCoctails] = useState();

  return (
    <div>
      <h1 className="menu_title">Menu</h1>
      <div className="menu">
      
      <button
          onClick={() => {
            setIsCoctails(!isCoctails);
          }}
        >
          <h3>Cocktails</h3>
        </button>
        <div className="shots">
          {isCoctails
            ? coctailsEng.map((item) => <OpenButtonShots key={item.id} {...item} />)
            : null}
        </div>
        <br />


      <button
          onClick={() => {
            setShots(!isShots);
          }}
        >
          <h3>Shots</h3>
        </button>
        <div className="shots">
          {isShots
            ? shotsEng.map((item) => <OpenButtonShots key={item.id} {...item} />)
            : null}
        </div>
        <br />

        <button
          onClick={() => {
            setIsVisibleDraftBeer(!isVisibleDraftBeer);
          }}
        >
          <h3>Draft beer</h3>
        </button>
        <div>
          {isVisibleDraftBeer
            ? draftBeer.map((item) => <OpenButton key={item.id} {...item} />)
            : null}
        </div>
        <br />
        <button
          onClick={() => {
            setIsVisibleBottleBeer(!isVisibleBottelBeer);
          }}
        >
          <h3>Bottled beer</h3>
        </button>
        <div>
          {isVisibleBottelBeer
            ? bottleBeer.map((item) => <OpenButton key={item.id} {...item} />)
            : null}
        </div>
        <br />
        <button
          onClick={() => {
            setIsVisibleWheatBeer(!isVisibleWheatBeer);
          }}
        >
          <h3>Wheat beer</h3>
        </button>
        <div>
          {isVisibleWheatBeer
            ? bottleWheatBeer.map((item) => (
                <OpenButton key={item.id} {...item} />
              ))
            : null}
        </div>
        <br />
        <button
          onClick={() => {
            setIsVisibleNoAlcoBeer(!isVisibleNoAlcoBeer);
          }}
        >
          <h3>Alcohol-free beer</h3>
        </button>
        <div>
          {isVisibleNoAlcoBeer
            ? noAlcoBeer.map((item) => <OpenButton key={item.id} {...item} />)
            : null}
        </div>
        <br />
        <button
          onClick={() => {
            setIsVisibleStrongAlco(!isVisibleStrongAlco);
          }}
        >
          <h3>Strong alcohol</h3>
        </button>
        <div>
          {isVisibleStrongAlco
            ? strongAlco.map((item) => <OpenButton key={item.id} {...item} />)
            : null}
        </div>
        <br />

        <button
          onClick={() => {
            setIsVisibleWins(!isVisibleWins);
          }}
        >
          <h3>Wine and vermouth</h3>
        </button>
        <div>
          {isVisibleWins
            ? wins.map((item) => <OpenButton key={item.id} {...item} />)
            : null}
        </div>
        <br />

        <button
          onClick={() => {
            setIsVisibleNoAlco(!isVisibleNoAlco);
          }}
        >
          <h3>Alcohol-free beverages</h3>
        </button>
        <div>
          {isVisibleNoAlco
            ? noAlco.map((item) => <OpenButton key={item.id} {...item} />)
            : null}
        </div>
        <br />

       
      </div>
    </div>
  );
};

  

export default MenuPageEng;
