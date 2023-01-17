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
import Zakupy from "./Pages/Zakupy";
import NowaLista from "./NowaLista/NowaLista";
import SingleProduct from "./Pages/SingleProduct";
import CartItem from "./Cart/CartItem";
import Produkty from "./Pages/Produkty";
import products from "./Pages/cardItems";
import PrivateRoute from "./Pages/PrivateRoute";
import AuthWrapper from "./Pages/AuthWrapper";
import CheckOut from "./Pages/CheckOut";



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
          <AuthWrapper>
            <Router>
              <Nav />
              <Routes>
                <Route path="/" element={<Card data={karty} />} />
                <Route path="/cards/:title" element={< Card data={karty} />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/sublimation" element={<Sublimation />} />
                <Route path="/Formularz" element={<Formularz />} />
                <Route path="/Cart" element={<Cart />} />
                <Route path="/CardModal/:title" element={<CardModal data={karty} />} />
                <Route path="/Products" element={<Products data={karty} />} />
                {/* <Route path="/SingleProduct" element={<SingleProduct />} /> */}
                <Route path="/Karty" element={<Karty />} />
                <Route path="/Zakupy" element={<Zakupy data={karty} />} />
                <Route path="/NowaLista" element={<NowaLista data={karty} />} />
                <Route path="/Produkty" element={<Produkty />} />
                <Route path="/Produkty/:productTitle" element={<SingleProduct />} />
                <Route element={<PrivateRoute />} />
                <Route path="/CheckOut" element={<CheckOut />} />
                <Route />
              </Routes>
              <Footer />
            </Router>
          </AuthWrapper>
        </div>

      </>
    );
  }
}
export default App;
