import React from "react";
import "./ourservices.css";
const OurServices = () =>  {
    return(
        <section className="pinkysection">
            <div className="container">
                <div className="pricing_top">
                    <h2 className="section_title">
                        <span>OUR SERVICES</span>
                        <h2>Choose your pricing plan</h2>
                    </h2>
                </div>
                {/* pricing wrapper  */}
                <div className="pricing_wrapper">

                <div class="col-lg-4 col-md-8">
                    <div class="ps-item">
                        <h3>BASIC</h3>
                        <div class="pi-price">
                            <h2>Ksh 15000.0</h2>
                            <span>SINGLE CLASS</span>
                        </div>
                        <ul>
                            <li>All basic amenities included</li>
                            <li>single club access</li>
                            <li>fitness assessment</li>
                            <li>Weight losing classes</li>
                            <li>Group training</li>
                            <li>No time restriction</li>
                        </ul>
                        <a href="ContactUs" class="primary-btn pricing-btn">Enroll now</a>
                        <a href="ContactUs" class="thumb-icon"><i class="fa fa-picture-o"></i></a>
                    </div>
                </div>


                <div class="col-lg-4 col-md-8">
                    <div class="ps-item">
                        <h3>REGULAR</h3>
                        <div class="pi-price">
                            <h2>Ksh 25000.0</h2>
                            <span>DOUBLE CLASS</span>
                        </div>
                        <ul>
                            <li>All club unlimited access</li>
                            <li>Unlimited group exercise classes</li>
                            <li>VIP guest privileges</li>
                            <li>unlimited training</li>
                            <li>Unlimited use of massage chairs</li>
                            <li>20% off supplements and cooler drinks</li>
                        </ul>
                        <a href="ContactUs" class="primary-btn pricing-btn">Enroll now</a>
                        <a href="ContactUs" class="thumb-icon"><i class="fa fa-picture-o"></i></a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-8">
                    <div class="ps-item">
                        <h3>PREMIUM</h3>
                        <div class="pi-price">
                            <h2>Ksh 45000.0</h2>
                            <span>TRIPLE CLASS</span>
                        </div>
                        <ul>
                            <li>Free riding</li>
                            <li>Unlimited level 10 team training</li>
                            <li>Personal trainer</li>
                            <li>Monthly progress meeting</li>
                            <li>personalized eating plan</li>
                            <li>MZ-1 heart rate monitor belt</li>             
                        </ul>
                        <a href="ContactUs" class="primary-btn pricing-btn">Enroll now</a>
                        <a href="ContactUs" class="thumb-icon"><i class="fa fa-picture-o"></i></a>
                    </div>
                </div>
            </div>
        </div>
        {/* services we offer  */}
                
        <section class="services-section spad">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section-title">
                            <span>What we do?</span>
                            <h2>PUSH YOUR LIMITS FORWARD</h2>
                        </div>
                    </div>
            </div> 
            <div class="row">
                <div class="col-lg-3 order-lg-1 col-md-6 p-0">
                    <div class="ss-pic">
                        <img src="https://themewagon.github.io/gymlife/img/services/services-1.jpg" alt=""/>
                    </div>
                </div>
                <div class="col-lg-3 order-lg-2 col-md-6 p-0">
                    <div class="ss-text">
                        <h4>Personal training</h4>
                        <p>We asses your bodily strengths and weaknesses and create customized workout plans</p>
                        
                    </div>
                </div>
                <div class="col-lg-3 order-lg-3 col-md-6 p-0">
                    <div class="ss-pic">
                        <img src="https://themewagon.github.io/gymlife/img/services/services-2.jpg" alt=""/>
                    </div>
                </div>
                <div class="col-lg-3 order-lg-4 col-md-6 p-0">
                    <div class="ss-text">
                        <h4>Group fitness classes</h4>
                        <p>It is good for your social health and can create set schedules and accountability and can also build confidence</p>
                        
                    </div>
                </div>
                <div class="col-lg-3 order-lg-8 col-md-6 p-0">
                    <div class="ss-pic">
                        <img src="https://themewagon.github.io/gymlife/img/services/services-3.jpg" alt=""/>
                    </div>
                </div>
                <div class="col-lg-3 order-lg-7 col-md-6 p-0">
                    <div class="ss-text second-row"> 
                    </div>
                    </div>
            </div>
        </div>
        </section>
        {/* i embedded a youtube video */}
        <section>
            <div class="video">

                    <iframe 
                       width="900" 
                       height="500" 
                       src="https://www.youtube.com/embed/lqS77csIHTY"
                       />

            </div>
        </section>  
    </section> 
    )
}
export default OurServices;