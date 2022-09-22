import React from "react";
import Card from "./Pages/Card";
const Hero = ({ karty }) => {
  return (
    <section className="hero">
      <div className="container">
        <Card data={karty} />
      </div>
    </section>
  );
};
export default Hero;
