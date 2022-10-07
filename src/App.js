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
              <Route path="/testy" element={<Testy />} />
            </Routes>
            <Footer />
          </Router>
        </div>
      </>
    );
  }
}
export default App;
