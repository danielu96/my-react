import React from 'react';
// import './App.css';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import {useState, useEffect} from 'react';
import DataFetching from './DataFetching';
 import FullCard from './FullCard';
 import Hero from './Hero';
 import axios from 'axios'
 import Apek from './Apek';


// import Navigation from './Navigation';
// import Page from './Page;'

function App() {
  const data = [
    {
      title: "html",
      description: "this is html",
    },
    {
      title: "css",
      description: "this is css",
    },
    {
      title: "java",
      description: "this is java",
    },
    {
      title: "Apek",
      description: "this is Fetch test",
    }
  ]
  // const [data , setData] = useState ([])
  // useEffect (() => {
  //   fetch("../Data2/data2.json")
  //   .then(response => response.json())
  //   .then(data=> setData(data))
  //     },[])
   
  return (
   
        <> 
  
         {/* {state.map(s => <div>{s.id}</div>)}   */}
          
        
             
     <Router>      
    <Routes> 
  {/* <Route path="/" element={<DataFetching />}/>   */} 
         <Route path="/" element={<Hero data={data}/>} /> 
      <Route path="/cards/:title" element={<FullCard data={data}/>} />  
      <Route path="/cards/Apek" element={<Apek  />} />  
      
         
        </Routes>
         </Router>  
  
         </>
  )}

export default App;
