import React from 'react';
 import './Styles/App.css';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import {useState, useEffect} from 'react';
 import FullCard from './FullCard';
 import Hero from './Hero';
//  import axios from 'axios'
 import Card from './Card';
 import Footer from './Layouts/stopka';
 import Nav from './Layouts/nav';
import Contact from './Pages/Contact';
import Sublimation from './Pages/sublimation';
  // import 'bootstrap/dist/css/bootstrap.css'; 
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
           <Router > 
  <Nav/>  
    <Routes >     
       <Route path="/" element={<Card data={karty}/>} />  
       <Route path="/" element={<Hero data={karty}/>} /> 
       <Route path="/cards/:title" element={<FullCard data={karty}/>} />  
       <Route path="/Contact" element={<Contact />} />  
       <Route path="/sublimation" element={<Sublimation />} /> 
       {/* <Route path="/Test" element={<Test/>} />  */}
      
       {/* <Route path="/cards/:title" element={<Product  />} />              */}
    </Routes> 
    <Footer/>   
          </Router>  
          
          </div> 
          </>
    )
  }
}
export default App;
