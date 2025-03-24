import React from "react";
import "./Styles/Css/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Footer from "./Layouts/stopek";
import Nav from "./Layouts/nav";
import Contact from "./Pages/Contact";
import Sublimation from "./Pages/sublimation";
import Formularz from "./Pages/Form";
import CardModal from "./Pages/CardModal";
import Cart from './Cart/Cart';
import Products from "./Pages/Products";
import Zakupy from "./Pages/Zakupy";
import NowaLista from "./NowaLista/NowaLista";
import SingleProduct from "./Pages/SingleProduct";
import CartItem from "./Cart/CartItem";
import Produkty from "./Pages/Produkty";
import PrivateRoute from "./Pages/PrivateRoute";
import AuthWrapper from "./Pages/AuthWrapper";
import CheckOut from "./Pages/CheckOut";




class App extends React.Component {
  // state = {
  //   products: [],
  // };
  // componentDidMount() {
  //   fetch("../Data2/data2.json")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       this.setState({
  //         products: data.products,
  //       });
  //     });
  // }
  render() {
    // const products = this.state.products;
    return (
      <>

        <div className="app">
          <AuthWrapper>
            <Router>
              <Nav />
              <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/cards/:title" element={< Card
                // data={products} 
                />} /> */}
                <Route path="/my-react/Contact" element={<Contact />} />
                <Route path="/my-react/sublimation" element={<Sublimation />} />
                <Route path="/my-react/Formularz" element={<Formularz />} />
                <Route path="/my-react/Cart" element={<Cart />} />
                <Route path="/my-react/CardModal/:title" element={<CardModal
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
                <Route path="/my-react/Produkty" element={<Produkty
                // data={products} 
                />} />

                <Route path="/my-react/Produkty/:productTitle" element={<SingleProduct />} />
                <Route element={<PrivateRoute />} >
                  <Route path="/my-react/CheckOut" element={<CheckOut />} />
                </Route >

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
