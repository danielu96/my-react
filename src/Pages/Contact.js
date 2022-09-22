import React from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/App.css";
const Contact = () => {
  const navigate = useNavigate();
  const handleOnClick = () => navigate(-1);
  console.log(navigate);
  return (
    <div className="Contact">
      <h1>Kontakt</h1>
      <p>Nawiązując do nauki Reacta.</p>
      <p>Strona wykonana w celach naukowych.</p>
      {/* <button className="btn" style={{background:"#26769e", color:"white"}} onClick={handleOnClick}>
        Wróć do poprzedniej strony{" "}
      </button> */}
    </div>
  );
};
export default Contact;
