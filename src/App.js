import "./App.css";
import React from "react";
import Header from "./Header";
import Signin from './Signin';
import './Signin.css';
import Footer from "./Footer";
import Viewpage from "./Viewpage";
import {Route, Link} from "react-router-dom";

function App() {
  return (
    <div className="app">
     <Route exact path="/" component={Signin} />
     <Route exact path="/Viewpage" component={Viewpage} />
     

    {/*Nav Bar*/}
      <Header />

        <Signin />
        
          {/*Domain*/}
            {/*Footer*/}
            <Footer />
            <Viewpage />

           
    </div>
  );
}

export default App;
