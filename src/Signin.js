
import React from 'react';
import './Signin.css';
import PetsIcon from '@material-ui/icons/Pets';
 


function Signin() {

    return (

        <div className="signinform">
        <div className="title">
        <h1>Pet Manager Demo <PetsIcon /> </h1>
        <br />
        </div>
        <div className="formboxgray">
        <form>
        <h3>Sign in:</h3>
        <input type ="text" name="Username" placeholder="Username"></input>
        <input type="text" name="Password" placeholder="Password"></input>
        <select id ="select domain" value="Select Domain">
        <option value ="dog">Select Domain</option>
        <option value ="size">Select Size</option>
        <option value ="vacinated">Select Vacinated</option>
        </select>
        <button class="btn"><a href="Viewpage.js"></a>Submit</button>
        
        </form>
        
       
         </div>
       </div>
      
       
            
        
    )
}



      
           
           
            
        
    


export default Signin;
