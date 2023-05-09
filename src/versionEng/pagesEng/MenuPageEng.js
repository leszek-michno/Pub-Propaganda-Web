import React, { useState } from "react";
import '../../styles/Menu.scss'
import {
  draftBeer,
  bottleBeer,
  bottleWheatBeer,
  noAlcoBeer,
  strongAlco,
  wins,
  noAlco,
} from "../../databases/MenuBase";
import { OpenButton } from '../../components/MenuPosition';

const MenuPageEng = () => {
  const [isVisibleDraftBeer, setIsVisibleDraftBeer] = useState();
  const [isVisibleBottelBeer, setIsVisibleBottleBeer] = useState();
  const [isVisibleWheatBeer, setIsVisibleWheatBeer] = useState();
  const [isVisibleNoAlcoBeer, setIsVisibleNoAlcoBeer] = useState();
  const [isVisibleStrongAlco, setIsVisibleStrongAlco] = useState();
  const [isVisibleWins, setIsVisibleWins] = useState();
  const [isVisibleNoAlco, setIsVisibleNoAlco] = useState();

  const taggleVisibleDraftBeet = () => {
    setIsVisibleDraftBeer(!isVisibleDraftBeer);
  };
  const taggleVisibleBottelBeer = () => {
    setIsVisibleBottleBeer(!isVisibleBottelBeer);
  };
  const taggleVisibleWheatBeer = () => {
    setIsVisibleWheatBeer(!isVisibleWheatBeer);
  };
  const taggleVisibleNoAlcoBeer = () => {
    setIsVisibleNoAlcoBeer(!isVisibleNoAlcoBeer);
  };
  const taggleVisibleStrongAlco = () => {
    setIsVisibleStrongAlco(!isVisibleStrongAlco);
  };
  const taggleVisibleWins = () => {
    setIsVisibleWins(!isVisibleWins);
  };
  const taggleVisibleNoAlco = () => {
    setIsVisibleNoAlco(!isVisibleNoAlco);
  };

  return (
    <div>
      <h1 className="menu_title">Menu</h1>
      <div className="menu">
        <button onClick={taggleVisibleDraftBeet}>
          <h3>Draft beer</h3>
        </button>
        <div>
          {isVisibleDraftBeer
            ? draftBeer.map((item) => <OpenButton key={item.id} {...item} />)
            : null}
        </div>
        <br />

        <button onClick={taggleVisibleBottelBeer}>
          <h3>Bottled beer</h3>
        </button>
        <div>
          {isVisibleBottelBeer
            ? bottleBeer.map((item) => <OpenButton key={item.id} {...item} />)
            : null}
        </div>
        <br />

        <button onClick={taggleVisibleWheatBeer}>
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

        <button onClick={taggleVisibleNoAlcoBeer}>
          <h3>Alcohol-free beer</h3>
        </button>
        <div>
          {isVisibleNoAlcoBeer
            ? noAlcoBeer.map((item) => <OpenButton key={item.id} {...item} />)
            : null}
        </div>
        <br />

        <button onClick={taggleVisibleStrongAlco}>
          <h3>Strong alcohol</h3>
        </button>
        <div>
          {isVisibleStrongAlco
            ? strongAlco.map((item) => <OpenButton key={item.id} {...item} />)
            : null}
        </div>
        <br />

        <button onClick={taggleVisibleWins}>
          <h3>Wine and vermouth</h3>
        </button>
        <div>
          {isVisibleWins
            ? wins.map((item) => <OpenButton key={item.id} {...item} />)
            : null}
        </div>
        <br />

        <button onClick={taggleVisibleNoAlco}>
          <h3>Alkohol-free drinks</h3>
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
