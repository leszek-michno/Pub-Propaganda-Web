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
} from "../../databases/MenuBase";
import {
  DraftBeer,
  BottleBeer,
  WheatBeer,
  StrongAlco,
  NoAlcoBeer,
  Wins,
  NoAlco,
} from "../../components/MenuPosition";

const MenuPage = () => {
  const [isVisibleDraftBeer, setIsVisibleDraftBeer] = useState(false);
  const [isVisibleBottelBeer, setIsVisibleBottleBeer] = useState(false);
  const [isVisibleWheatBeer, setIsVisibleWheatBeer] = useState(false);
  const [isVisibleNoAlcoBeer, setIsVisibleNoAlcoBeer] = useState(false);
  const [isVisibleStrongAlco, setIsVisibleStrongAlco] = useState(false);
  const [isVisibleWins, setIsVisibleWins] = useState(false);
  const [isVisibleNoAlco, setIsVisibleNoAlco] = useState(false);

  return (
    <div>
      <h1 className="menu_title">Menu</h1>
      <div className="menu">
        <button
          onClick={() => {
            setIsVisibleDraftBeer(!isVisibleDraftBeer);
          }}
        >
          <h3>Piwo lane</h3>
        </button>
        <div>
          {isVisibleDraftBeer
            ? draftBeer.map((item) => <DraftBeer key={item.id} {...item} />)
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
            ? bottleBeer.map((item) => <BottleBeer key={item.id} {...item} />)
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
                <WheatBeer key={item.id} {...item} />
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
            ? noAlcoBeer.map((item) => <NoAlcoBeer key={item.id} {...item} />)
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
            ? strongAlco.map((item) => <StrongAlco key={item.id} {...item} />)
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
            ? wins.map((item) => <Wins key={item.id} {...item} />)
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
            ? noAlco.map((item) => <NoAlco key={item.id} {...item} />)
            : null}
        </div>
        <br />
      </div>
    </div>
  );
};

export default MenuPage;
