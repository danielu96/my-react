import React from "react";
import { Link } from "react-router-dom";
import "./Styles/App.css";
const Card = ({ data }) => {
  return (
    <>
      <div className="box">
        {data.map((card, index) => (
          <div className="card" key={index}>
            <h1>{card.title}</h1>
            <p>{card.description}</p>
            <img className="img" src={`${card.img}`} alt="..."></img>
            <Link to={`/cards/${card.title}`}> Zobacz</Link>
          </div>
        ))}
      </div>
    </>
  );
};
export default Card;
