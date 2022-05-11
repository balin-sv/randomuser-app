import React from "react";
import Card from "../card/card";
import "./main-container.css";

const MainContainer = ({ data, deliteCard, isFiltered, toogle }) => {
  const cards = data.map((card) => {
    return (
      <Card
        key={card.id}
        name={card.name}
        age={card.age}
        country={card.country}
        phone={card.phone}
        img={card.img}
        deliteCard={() => {
          deliteCard(card.id);
        }}
      />
    );
  });

  return (
    <>
      <div className="cards-container">
        {isFiltered && cards.length === 0 ? <h1>No search matches</h1> : cards}
      </div>
      {isFiltered && (
        <button className="btn" onClick={toogle}>
          Go back
        </button>
      )}
    </>
  );
};

export default MainContainer;
