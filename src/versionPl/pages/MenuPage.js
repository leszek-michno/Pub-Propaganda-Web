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
import {
  DraftBeer,
  BottleBeer,
  WheatBeer,
  StrongAlco,
  NoAlcoBeer,
  Wins,
  NoAlco,
} from "../componets/MenuPosition";

const MenuPage = () => {
  const [isVisibleDraftBeer, setIsVisibleDraftBeer] = useState(false);
  const [isVisibleBottelBeer, setIsVisibleBottleBeer] = useState(false);
  const [isVisibleWheatBeer, setIsVisibleWheatBeer] = useState(false);
  const [isVisibleNoAlcoBeer, setIsVisibleNoAlcoBeer] = useState(false);
  const [isVisibleStrongAlco, setIsVisibleStrongAlco] = useState(false);
  const [isVisibleWins, setIsVisibleWins] = useState(false);
  const [isVisibleNoAlco, setIsVisibleNoAlco] = useState(false);

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
          <h3>Piwo lane</h3>
        </button>
        <div>
          {isVisibleDraftBeer
            ? draftBeer.map((item) => <DraftBeer key={item.id} {...item} />)
            : null}
        </div>
        <br />

        <button onClick={taggleVisibleBottelBeer}>
          <h3>Piwa butelkowe</h3>
        </button>
        <div>
          {isVisibleBottelBeer
            ? bottleBeer.map((item) => <BottleBeer key={item.id} {...item} />)
            : null}
        </div>
        <br />

        <button onClick={taggleVisibleWheatBeer}>
          <h3>Piwa butelkowe pszeniczne</h3>
        </button>
        <div>
          {isVisibleWheatBeer
            ? bottleWheatBeer.map((item) => (
                <WheatBeer key={item.id} {...item} />
              ))
            : null}
        </div>
        <br />

        <button onClick={taggleVisibleNoAlcoBeer}>
          <h3>Piwa butelkowe bezalkoholowe</h3>
        </button>
        <div>
          {isVisibleNoAlcoBeer
            ? noAlcoBeer.map((item) => <NoAlcoBeer key={item.id} {...item} />)
            : null}
        </div>
        <br />

        <button onClick={taggleVisibleStrongAlco}>
          <h3>Alkohole wysokoprocentowe</h3>
        </button>
        <div>
          {isVisibleStrongAlco
            ? strongAlco.map((item) => <StrongAlco key={item.id} {...item} />)
            : null}
        </div>
        <br />

        <button onClick={taggleVisibleWins}>
          <h3>Wina i wermuty</h3>
        </button>
        <div>
          {isVisibleWins
            ? wins.map((item) => <Wins key={item.id} {...item} />)
            : null}
        </div>
        <br />

        <button onClick={taggleVisibleNoAlco}>
          <h3>Napoje bezalkoholowe</h3>
        </button>
        <div>
          {isVisibleNoAlco
            ? noAlco.map((item) => <NoAlco key={item.id} {...item} />)
            : null}
        </div>
        <br />
      </div>
    </div>
  );
};

export default MenuPage;
