import React from "react";
import "./Styles/Css/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Card from "./Pages/Card";
import Footer from "./Layouts/stopek";
import Nav from "./Layouts/nav";
import Contact from "./Pages/Contact";
import Sublimation from "./Pages/sublimation";
import Formularz from "./Pages/Form";
import Testy from "./Tests/test.js";
import FullCard from './Pages/FullCard.js';
import Zakupy from "./Pages/Zakupy";
import CardModal from "./Pages/CardModal";
import { Provider } from "react-redux";
import store from "./store/store"
import NowaLista from "./NowaLista/NowaLista";
import Cart from './Cart/Cart';
// import List from "./Pages/tasksList";

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
              {/* <Route path="/cards/:title" element={< FullCard data={karty} />} /> */}
              <Route path="/Contact" element={<Contact />} />
              <Route path="/sublimation" element={<Sublimation />} />
              <Route path="/Formularz" element={<Formularz />} />
              {/* <Route path="/zakupy/:title" element={<Zakupy data={karty} />} /> */}
              {/* <Route path="/NowaLista/:title" element={<NowaLista data={karty} />} /> */}
              <Route path="/Cart" element={<Cart />} />
              <Route path="/Modal/:title" element={<CardModal data={karty} />} />
            </Routes>
            <Footer />
          </Router>
        </div>

      </>
    );
  }
}
export default App;
