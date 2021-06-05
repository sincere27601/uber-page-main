
import React from 'react';
import './Signin.css';
 
 


function Signin() {

    return (

        <div className="signinform">
        <div className="title">
        <h1>Pet Manager Demo</h1>
        <br />
        </div>
        <div className="formboxgray">
        <h3>Sign In:</h3>
         <input type="username" value="username" size="30"></input>
         <br />
         <input type="password" value="password" size="30"></input>
         <br />
         <br />
         
         <form name="form1" id="form1" action="/action_page.php">
         <select name="chapter" id="chapter" >
         <option value="" selected="selected">Select Domain</option>
         </select>
         <br />
        
       </form>
         </div>
       </div>
      
       
            
        
    )
}



      
           
           
            
        
    


export default Signin;
