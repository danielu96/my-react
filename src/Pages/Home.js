import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../Styles/Css/App.css";
import Banerek from "../Layouts/Banerek";

const Home = () => {
  return (
    <>
      <Banerek />
    </>
  );
};
export default Home;