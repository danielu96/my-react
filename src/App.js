import React from 'react';
 import './Styles/App.css';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import {useState, useEffect} from 'react';
import DataFetching from './DataFetching';
 import FullCard from './FullCard';
 import Hero from './Hero';
 import axios from 'axios'
 import Card from './Card';
 import Product from './Product'
 import Babek from './Babek';
 import Grid from './grid';
 import Test from './test';
 import Nav from './Layouts/nav';
import Navbar from './Layouts/navigacja';
import Footer from './Layouts/stopka';
import Header from './Layouts/header';
import Contact from './Contact';
import Sublimation from './Pages/sublimation';
// import { Navbar } from 'react-bootstrap';
//  import 'bootstrap/dist/css/bootstrap.css';
class App extends React.Component {
  state = {
             karty: []
  }
  componentDidMount() { 
     fetch('../Data2/data2.json')
          .then(response => response.json())
          .then(data => {
              this.setState({
                  karty: data.karty
              })
          })
  }
   render() {
     const karty = this.state.karty;
      // const karty = this.state.karty.map(karty  => <Card key={karty.id} title={karty.title} /> ) 
//  const words = this.state.words.map(word => <Word key={word.id} polish={word.pl} english={word.en}
//   />)    
      return ( 
          <>
             {/* {karty} */}
           <div className='app'>      
      <Router basename={process.env.PUBLIC_URL}>  
  <Nav/>  
        <Routes>     
          
 <Route path="/" element={<Card data={karty}/>} />  
         <Route path="/" element={<Hero data={karty}/>} /> 
       <Route path="/cards/:title" element={<FullCard data={karty}/>} />  
       <Route path="/Contact" element={<Contact />} />  
       <Route path="/Sublimation" element={<Sublimation />} /> 
       <Route path="/grid" element={<Grid data={karty}/>} />   
       <Route path="/test" element={<Test data={karty}/>} />  
       <Route path="/cards/:title" element={<Product  />} />             
    </Routes> 
    <Footer/>   
          </Router>  
          
          </div> 
          </>
    )
  }
}
export default App;
