import React from "react";
import "./card.css";
import { FaRegTrashAlt } from "react-icons/fa";

const Card = ({ name, age, country, phone, img, deliteCard }) => {
  return (
    <div className="card">
      <div className="card__icon" onClick={deliteCard}>
        <FaRegTrashAlt />
      </div>
      <div className=" card__body">
        <div className="card__img-wrap">
          <img src={img} alt="img"></img>
        </div>
        <h4>
          <span>Name </span> {name}
        </h4>
        <h4>
          <span>Age </span>
          {age}
        </h4>
        <h4>
          <span>Country </span>
          {country}
        </h4>
        <h4>
          <span>Phone </span>
          {phone}
        </h4>
      </div>
    </div>
  );
};

export default Card;
