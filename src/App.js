import "./App.css";
import React from "react";
import Header from "./Header";
import Signin from './Signin';
import './Signin.css';
import Footer from "./Footer";
import {Route, Link} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";


function App() {
  return (
    <div className="app">
     <Route exact path="/" component={Home} />
     <Route exact path="/About" component={About} />
     <Route exact path="/Contact" component={Contact} />
     
     <Header />

     <Signin />
       
         {/*Domain*/}
           {/*Footer*/}
           <Footer />
           

           
    </div>
  );
}

export default App;
