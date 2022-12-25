import './event.css'
import Header from "./Header";
import { useState } from 'react';
import { json } from 'react-router-dom';
import React from 'react';
import "./com.css";

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
    <h3 className="header"> Welcome to Events Page</h3>
            <div className="main">


            <div className="cardNew" >

            <div className="image">
            <img src="https://thumbs.dreamstime.com/b/celebrating-elderly-woman-birthday-blowing-candles-homemade-baked-cake-indoor-birthday-party-seniors-woman-celebrating-251948614.jpg" />
            </div>
            <div className="title">
            <h1>Birthday</h1>
            </div>
            <div className="des">
            <p>Celebration and party</p>
            
            </div>
            </div>



            <div className="cardNew">

            <div className="image">
            <img src="http://casinopartyatlanta.com/wp-content/uploads/2012/01/casino-party-for-seniors-300x225.jpg" />
            </div>
            <div className="title">
            <h1>Casino Night</h1>
            </div>
            <div className="des">
            <p>Music and dance</p>
                
            </div>
            </div>
            
            <div className="cardNew">

                <div className="image">
                <img src="https://media.istockphoto.com/id/1005860264/photo/exhausted-mature-runner-pouring-fresh-water-on-his-head-during-a-marathon-race.jpg?s=612x612&w=0&k=20&c=kHEVrHFnOkvZ7paMKn66iMW4kcZOSGJiAaQrVyUCSYQ=" />
                </div>
                <div className="title">
                <h1>Marathon</h1>
                </div>
                <div className="des">
                <p>Walking, running and prizes</p>

                </div>
                </div>
                
            </div>


    <h3 className="book"> Book your Event by filing this form</h3>
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
