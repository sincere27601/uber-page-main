import "./App.css";
import React from "react";
import Header from "./Header";
import Signin from './Signin';
import './Signin.css';
import Footer from "./Footer";


function App() {
  return (
    <div className="app">
     
    {/*Nav Bar*/}
      <Header />

        <Signin />
        
          {/*Domain*/}
            {/*Footer*/}
            <Footer />
    </div>
  );
}

export default App;
