
import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Header from './header';
import '../Styles/App.css';
import Navigation from './Navigation';
import Page from './Page';
import Footer from './stopka';



function App() {
  return (
    <Router>
       <div className='App'>
       <header> 
      {  <Header/>} 
        </header>   
         <main>
           {<Navigation/>}
          <section>
            {<Page />}
          </section>
        </main> 
        <footer>
          {<Footer/>}
          </footer>
          </div>
            
             
    </Router>
    
  );
}

export default App;
