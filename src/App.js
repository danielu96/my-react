import React from "react";
import "./Styles/Css/App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Footer from "./Layouts/stopek";
import Nav from "./Layouts/nav";
import Contact from "./Pages/Contact";
import Sublimation from "./Pages/Sublimation";
import Formularz from "./Pages/Form";
import CardModal from "./Pages/CardModal";
import Cart from './Cart/Cart';
import SingleProduct from "./Pages/SingleProduct";
import Produkty from "./Pages/Produkty";
import PrivateRoute from "./Pages/PrivateRoute";
import AuthWrapper from "./Pages/AuthWrapper";
import CheckOut from "./Pages/CheckOut";



class App extends React.Component {
  render() {
    console.log("App component rendered");
    return (
      <>
        <div className="app">
          <AuthWrapper>
            <Router >
              <Nav />
              <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/cards/:title" element={< Card
                // data={products} 
                />} /> */}
                <Route path="/Contact" element={<Contact />} />
                <Route path="/sublimation" element={<Sublimation />} />
                <Route path="/Formularz" element={<Formularz />} />
                <Route path="/Cart" element={<Cart />} />
                <Route path="/CardModal/:title" element={<CardModal
                //  data={products} 
                />} />
                {/* <Route path="/Products" element={<Products
                // data={products} 
                />} /> */}
                {/* <Route path="/Zakupy" element={<Zakupy
                // data={products} 
                />} /> */}
                {/* <Route path="/NowaLista" element={<NowaLista
                // data={products} 
                />} /> */}
                <Route path="/Produkty" element={<Produkty
                // data={products} 
                />} />

                <Route path="/Produkty/:productTitle" element={<SingleProduct />} />
                <Route element={<PrivateRoute />} >
                  <Route path="/CheckOut" element={<CheckOut />} />
                </Route >
              </Routes>
            </Router>
            <Footer />

          </AuthWrapper>
        </div>
      </>
    );
  }
}
export default App;
