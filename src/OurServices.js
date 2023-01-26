import React from "react";
//import ReactDom from "react-dom";
//const OurServices=() =>
const OurServices = () =>  {
    return(
        <section>
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
    



          {/*  <section>
                <div class="sub-title">
                    <h2>PUSH YOUR LIMITS FORWARD <br>
                    </br>WE OFFER TO YOU</h2>
                </div>
              <div class="row"> 
                    <div class="col-lg-4 col-md-4 col-sm-6">
                         <div class="single-cat single-cat2 text-center mb-50 ">
                            <div class="cat-icon">
                                <i class="flaticon-fitness">
                                    <img src="https://cdn-icons-png.flaticon.com/128/3043/3043888.png" alt="icon"/>
                                </i>
                            </div>
                            <div class="cat-cap">
                                <h5>QUALITY EQUIPMENT</h5>
                                <p>We offer a wide range of equipments to you</p>
                            </div>
                         </div>
                         <div class="single-cat single-cat2 text-center mb-50 ">
                            <div class="cat-icon">
                                <i class="flaticon-fitness">
                                    <img src="https://cdn-icons-png.flaticon.com/128/1719/1719714.png" alt="icon"/>
                                </i>
                            </div>
                            <div class="cat-cap">
                                <h5>HEALTH CARING</h5>
                                <p>Your health matters the most to us</p>
                            </div>
                         </div>
                         <div class="single-cat single-cat2 text-center mb-50 ">
                            <div class="cat-icon">
                                <i class="flaticon-fitness">
                                    <img src="https://cdn-icons-png.flaticon.com/128/1719/1719714.png" alt="icon"/>
                                </i>
                            </div>
                            <div class="cat-cap">
                                <h5>HEALTH CARING</h5>
                                <p>Your health matters the most to us</p>
                            </div>
                         </div>
                         <div class="single-cat single-cat2 text-center mb-50 ">
                            <div class="cat-icon">
                                <i class="flaticon-fitness">
                                    <img src="https://cdn-icons-png.flaticon.com/128/1719/1719714.png" alt="icon"/>
                                </i>
                            </div>
                            <div class="cat-cap">
                                <h5>HEALTH CARING</h5>
                                <p>Your health matters the most to us</p>
                            </div>
                         </div>
                    </div>
                </div>
    </section> */}


{/* services we offer  */}
                
    <section class="services-section spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title">
                        <span>What we do?</span> 
                        {/* <h2>WHAT WE DO</h2> */}
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
                  {/*       <h4>Body building</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut dolore
                            facilisis.</p>
                        
                
                <div class="col-lg-3 order-lg-6 col-md-6 p-0">
                    <div class="ss-pic">
                        <img src="https://themewagon.github.io/gymlife/img/services/services-4.jpg" alt=""/>
                    </div>
                </div>
                <div class="col-lg-3 order-lg-5 col-md-6 p-0">
                    <div class="ss-text second-row">
                        <h4>Strength training</h4>
                        <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus.</p>
                        
                    </div>
</div> */}
            </div>
        </div>
    </section>



    
    
     

    {/* <section class="banner">
     <div class="container">
     <div class="row">
        <img src="https://media.istockphoto.com/id/1125866502/photo/eyes-on-the-prize-giving-up-is-never-an-option.jpg?b=1&s=170667a&w=0&k=20&c=1ZD0oFC0appfhA0C8-Q1lw3_dC_8NeGkBFpU9EUtY_k=" alt="" width={2400} height={700} />

        
            
                <div class="col-lg-12 text-center">
                    <div class="bs-text service-banner">
                        <h2>Exercise until the body obeys.</h2>
                        <div class="bt-tips">Where health, beauty and fitness meet.</div>
                        <a href="https://www.youtube.com/watch?v=lqS77csIHTY" class="play-btn video-popup"><i
                                class="fa fa-caret-right">
                                    
                                    </i></a>
                    </div>
                </div>
            </div>
        </div>
</section> */}

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