import React from "react";
import "./Styles/Css/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Card from "./Pages/Card";
import Footer from "./Layouts/stopek";
import Nav from "./Layouts/nav";
import Contact from "./Pages/Contact";
import Sublimation from "./Pages/sublimation";
import Formularz from "./Pages/Form";
import CardModal from "./Pages/CardModal";
import Cart from './Cart/Cart';
import Karty from "./KARTY/karty";
import Products from "./Pages/Products";



class App extends React.Component {
  state = {
    karty: [],
  };
  componentDidMount() {
    fetch("../Data2/data2.json")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          karty: data.karty,
        });
      });
  }
  render() {
    const karty = this.state.karty;
    return (
      <>

        <div className="app">
          <Router>
            <Nav />
            <Routes>
              <Route path="/" element={<Card data={karty} />} />
              <Route path="/cards/:title" element={< Card data={karty} />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/sublimation" element={<Sublimation />} />
              <Route path="/Formularz" element={<Formularz />} />
              <Route path="/Cart" element={<Cart />} />
              <Route path="/Modal/:title" element={<CardModal data={karty} />} />
              <Route path="/Products" element={<Products data={karty} />} />
              <Route path="/Karty" element={<Karty />} />
            </Routes>
            <Footer />
          </Router>
        </div>

      </>
    );
  }
}
export default App;
