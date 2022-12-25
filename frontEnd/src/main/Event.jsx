import './event.css'
import Header from "./Header";
import { useState } from 'react';
import { json } from 'react-router-dom';
import React from 'react';

const Event = () => {
  
  const [formData , setFormData] = useState({
    eventType:"",
    firstName:"",
    lastName:"",
    emailAddress:"",
    mobileNumber:"",
    enquiry:""
  })

  const clearForm = () =>{
    setFormData({
      eventType:"",
      firstName: "",
      lastName: "",
      emailAddress: "",
      mobileNumber: "",
      enquiry: ""
    })
  }
  
  const sendData = async(formData)=>{
    try {
      fetch("http://localhost:8000/formSubmit",{
        method:'post',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify({
          eventType:formData.eventType,
          firstName: formData.firstName,
          lastName: formData.lastName,
          emailAddress: formData.emailAddress,
          mobileNumber: formData.mobileNumber,
          enquiry: formData.enquiry
        })
      })
      .then(res=>res.json())
      .then(message=>console.log(message))
      clearForm();

    } catch (error) {
      console.log("Error Calling API");
    }
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    sendData(formData)
  }
  
  let field,value;
  const onChange = (event)=>{
    field = event.target.name;
    value = event.target.value;
    setFormData((prevVal)=>{
      return({...prevVal,[field]:value})
    })
  }

  return (
  <div>
    <Header />
    <div className="event">
      <div className="testbox">
        <form onSubmit={(e)=>handleSubmit(e)}>
          <h1>Fill this form to book an event</h1>
          <h4>Type of Event<span>*</span></h4>
          <input 
          className="name" 
          onChange={onChange}
          type="text" name="eventType" 
          placeholder="e.g Birthday" 
          value={formData.eventType}
          />
          
          <h4>Name<span>*</span></h4>
          <div className="title-block">
            
            <input className="name" 
            onChange={onChange}
            type="text" 
            name="firstName" 
            placeholder="First" 
            value={formData.firstName}
            />
            
            <input 
            style={{marginLeft: "30px"}} 
            className="name" 
            onChange={(e)=>onChange(e)} 
            type="text" 
            name="lastName" 
            placeholder="Last" 
            value={formData.lastName}
            />
          </div>
          <h4>Email Address<span>*</span></h4>
          <input 
          type="email" 
          onChange={onChange}
          name="emailAddress"
          value={formData.emailAddress}
          />
          
          <h4>Contact Number<span>*</span></h4>
          <input 
          type="number" 
          onChange={onChange} 
          name="mobileNumber"
          value={formData.mobileNumber}
          />

          <h4>Enquiry</h4>
          <p className="small">Please tell us more about the event, we will reach out you shortly through phone call.</p>
            <textarea 
            name="enquiry" 
            onChange={onChange} 
            rows="5"
            value={formData.enquiry}
            >
            </textarea>
          <div className="btn-block">
            <button type="submit" >Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
)
}

export default Event;
