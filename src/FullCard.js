import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Styles/Contact.css";
const FullCard = ({ data }) => {
  const { title } = useParams();
  const navigate = useNavigate();
  const handleOnClick = () => navigate(-1);
  console.log(navigate);
  return (
    <div>
      {data
        .filter((card) => card.title === title)
        .map((card, index) => (
          <div className="Contact" key={index}>
            <h1>{card.title}</h1>
            <div className="opis">{card.opis}</div>
            <img className="Image" src={`${card.Image}`} alt="..."></img>
            <button className="btn_my" onClick={handleOnClick}>
              Wróć do poprzedniej strony{" "}
            </button>
          </div>
        ))}
    </div>
  );
};
export default FullCard;
