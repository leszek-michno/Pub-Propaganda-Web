import React, { useState } from "react";
import "../../styles/Menu.scss";
import {shots, 
  draftBeer,
  bottleBeer,
  bottleWheatBeer,
  noAlcoBeer,
  strongAlco,
  wins,
  noAlco,
  coctails
} from "../../databases/MenuBase";
import { OpenButton, OpenButtonShots} from "../../components/MenuPosition";

const MenuPage = () => {
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
          <h3>Koktaile</h3>
        </button>
        <div className="shots">
          {isCoctails
            ? coctails.map((item) => <OpenButtonShots key={item.id} {...item} />)
            : null}
        </div>
        <br />


      <button
          onClick={() => {
            setShots(!isShots);
          }}
        >
          <h3>Szoty</h3>
        </button>
        <div className="shots">
          {isShots
            ? shots.map((item) => <OpenButtonShots key={item.id} {...item} />)
            : null}
        </div>
        <br />

        <button
          onClick={() => {
            setIsVisibleDraftBeer(!isVisibleDraftBeer);
          }}
        >
          <h3>Piwo lane</h3>
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
          <h3>Piwa butelkowe</h3>
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
          <h3>Piwa butelkowe pszeniczne</h3>
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
          <h3>Piwa butelkowe bezalkoholowe</h3>
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
          <h3>Alkohole wysokoprocentowe</h3>
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
          <h3>Wina i wermuty</h3>
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
          <h3>Napoje bezalkoholowe</h3>
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

export default MenuPage;
