import React from "react";
import "./Styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FullCard from "./FullCard";
import Hero from "./Hero";
import Card from "./Card";
import Footer from "./Layouts/stopek";
import Nav from "./Layouts/nav";
import Contact from "./Pages/Contact";
import Sublimation from "./Pages/sublimation";
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
              <Route path="/" element={<Hero data={karty} />} />
              <Route path="/cards/:title" element={<FullCard data={karty} />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/sublimation" element={<Sublimation />} />
            </Routes>
            <Footer />
          </Router>
        </div>
      </>
    );
  }
}
export default App;
