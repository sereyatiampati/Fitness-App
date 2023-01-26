import React, { useState } from "react";
import "./contactus.css"

function ContactUs() {
// update the state of the the form
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tel: "",
    message: "",
  });

  
  function handleChange(e){
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    })

}

function handleSubmit(){
    
    fetch("http://localhost:3000/messages",{
        method:"POST",
        headers:{
            "content-Type":"application/json",
        },
        body:JSON.stringify(formData)
    })
    .then((resp)=>(resp.json)())
    .then((formData)=>setFormData(formData))
    alert('Transaction Added successfully')
   }

  return (
		<>
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />

<div id="contact" class="contact-area section-padding">
	<div class="container">										
		<div class="section-title text-center">
			<h1>Get in Touch</h1>
			<p>Want to stay fit and you can't find the motivation? Join in on one of our fitness classes with our certified trainer! Enjoy a discount of <strong>10% off</strong> when you book in this month.</p>
		</div>					
		<div class="row">
			<div class="col-lg-7">	
				<div class="contact">
					<form onSubmit={handleSubmit} class="form" name="enq" method="post" onsubmit="return  validation();">
						<div class="row">
							<div class="form-group col-md-6">
								<input type="text" name="name" class="form-control" placeholder="Name" required="required" value={formData.name} onChange={handleChange}/>
							</div>
							<div class="form-group col-md-6">
								<input type="email" name="email" class="form-control" placeholder="Email" required="required" value={formData.email} onChange={handleChange}/>
							</div>
							<div class="form-group col-md-12">
								<input type="number" name="tel" class="form-control" placeholder="Phone Number" required="required" value={formData.phone} onChange={handleChange}/>
							</div>
							<div class="form-group col-md-12">
								<textarea rows="6" name="message" class="form-control" placeholder="Your Message" required="required" value={formData.message} onChange={handleChange}></textarea>
							</div>
							<div class="col-md-12 text-center">
								<button type="submit" value="Send message" name="submit" id="submitButton" class="btn btn-contact-bg" title="Submit Your Message!">Send us a Message</button>
							</div>
						</div>
					</form>
				</div>
			</div>
			<div class="col-lg-5">
				<div class="single_address">
					<i class="fa fa-map-marker"></i>
					<h4>Our Address</h4>
					<p>Buffalo mall</p>
				</div>
				<div class="single_address">
					<i class="fa fa-envelope"></i>
					<h4>Send your message</h4>
					<p>flexygym@gmail.com</p>
				</div>
				<div class="single_address">
					<i class="fa fa-phone"></i>
					<h4>Call us on</h4>
					<p>(+254) 723 397 100</p>
				</div>
				<div class="single_address">
					<i class="fa fa-clock-o"></i>
					<h4>Work Time</h4>
					<p>Mon - Fri: 08.00 - 16.00. <br/>Sat: 10.00 - 14.00</p>
				</div>					
			</div>
		</div>
	</div>	
</div>
        </>
    
  );
}

export default ContactUs;