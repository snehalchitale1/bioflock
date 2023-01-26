import React, { useState } from "react";
import "./joinus.css";

export const RegistrationForm = () => {

const[state,setState]=useState({ name:"",number:"",email:""})


function handleChange(event){
  let value = event.target.value;
  let name = event.target.name;
  setState({...state, [name]: value})
}

function submitHandle(e){
  e.preventDefault()
 console.log(state)
 alert(`Details Submitted ,Our Team Will Contact You Soon ! Thank you !`) 
 setState({ name:"",number:"",email:""})
}



  return (
    <div className="RegistrationForm">
      <form onSubmit={submitHandle}>
      <div>
          <label>Name </label>
        </div>
        <div>
          <input type="text" name="name" onChange={handleChange} value={state.name}/>
        </div>
        <div>
          <label>Contact Number </label>
        </div>
        <div>
          <input type="number" name="number"  onChange={handleChange} value={state.number} />
        </div>
        <div>
          <label>E-mail </label>
        </div>
        <div>
          <input type="text" name="email"  onChange={handleChange} value={state.email} />
        </div>

        <div>
          {" "}
          <input type="submit" value="Submit" />
        </div>
      </form>
      <h4>Register and get more details about our BIO-FLOCK Monitoring Application ...!</h4>
    </div>
  );
};

export default RegistrationForm;
