import React, { Component } from 'react';
import './Details.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';


import { Button } from 'reactstrap';

class Details extends Component {
    render() {
      return (
        <div>
        <div className="bodypart">
         <div className="profile">
        <img className="image" alt="" src="nithin.jpg"/>
        <h1> Nithin Thomas Mathew  </h1>
        <h2> Front End Developer </h2>
        </div>
           <p className="pes">With 1yr+ hands-on experience developing, releasing, and maintaining large-scale online web-based applications, I have learned to own what I build as I create, test and refine the front end as well as web-services on the server side, following the motto of Discover, design, develop, deploy, debug.
          </p>
                
       </div>
        
          <div className="menu">
             <Button className="buttona-menu"><a href="#experience">Experiences</a></Button>
             <Button className="buttona-menu"><a href="#educationa">Education</a></Button>
             <Button className="buttona-menu"><a href="#skills">Skills</a></Button>
             <Button className="buttona-menu"><a href="#portfolio">Portfolio</a></Button>
             <Button className="buttona-menu"><a href="#contact">Contact</a></Button>
         </div>
         <div className="footer">
           <div className="footerdata">
        <i className="fa fa-envelope" aria-hidden="true"> nithinmtp@gmail.com </i>
        <i className="fa fa-mobile" aria-hidden="true"> +91 9605157526 </i>
        </div>
        </div>
              <div className="experience" id="experience">
                <div className="expsmall">
                <h1 className="exph"> Work Experiences </h1>
                <img className="imagemeaww" alt="Meaww.com" src="meaww.jpg"/>
                <h1 className="position"> Front End Developer </h1>
                <h1 className="namemeaww"><a className="meawwlink" href="https://meaww.com"> Meaww.com </a> </h1>
                <h1 className="workperiod"><i className="fa fa-calendar" aria-hidden="true"> Jan 2017 to Present </i> </h1>
                <i className="fa fa-map-marker" aria-hidden="true"> Bangalore </i>
                <p className="meawwp">Meaww is a fully integrated entertainment company and has forayed into all forms of media, from FB quizzes, videos to articles to art and opinion pieces; which cater to all kinds of content needs of our users.
                  </p>
                     <p className="meawwpme">However, graduating with a Btech degree with no backlogs, I was able to join Meaww as Developer and I started coding for their product Fb-quizzes. 
                    After one year later, I am working with development & Social media marketing team.
                    </p>
                  </div>
              </div>
              <div className="education" id="education">
                <h1 className="educationa"id="educationa">Education</h1>
                <i className="fa fa-graduation-cap" aria-hidden="true"></i>
                <h1 className="dname" >Bachelore of technology</h1>
                <h2 className="clgname">GISAT</h2>
                <i className="fa fa-map-marker" aria-hidden="true"> Kerala, India</i>
                <h3 className="clgnamea">(2012-2016) </h3>
                
                <p className="collegep">"A college degree is not a sign that one is a finished product but an indication a person is prepared for life." <br /> <br />
                Going to college Helped me, Because i had four years in the conservatory program, which is close as you can get to a professional environment. Its like all day.
                  </p>
              
                </div>
              <div className="skills" id="skills">
               <h1 className="skillsa">Skills</h1>
                 <div className="circle">
                 <img className="circlea" alt="" src="1.png"/>
                 <img className="circlea" alt="" src="7.png"/>
                 <img className="circlea" alt="" src="css.jpg"/>
                 <img className="circlea" alt="" src="2.png"/>
                 <img className="circlea" alt="" src="react.png"/>
                 <img className="circlea" alt="" src="jquery.png"/>
                 <img className="circlea" alt="" src="nodejs.png"/>
                 <img className="circlea" alt="" src="4.png"/>
                 <img className="circlea" alt="" src="6.png"/>
                 <img className="circlea" alt="" src="5.png"/>
                 <img className="circlea" alt="" src="9.png"/>
                 <img className="circlea" alt="" src="10.png"/>
                </div> 
               </div>
              
              <div className="portfolio" >
                 <h1 className="portname" id="portfolio">Portfolio</h1>
                 <i className="fa fa-product-hunt" aria-hidden="true"></i>
                 <a className="leopetra" href="https://meaww.com/"> Meaww.com </a>
              
                 <h1 className="porta">A fully functional website which brings the latest entertainment, political, technology and lifestyle news, along with healthy doses of gossip, trends and humor to a discerning global reader.</h1> 
                 
                 <i className="fa fa-product-hunt" aria-hidden="true"></i>
                 <a className="leopetra" href="https://weberhead.herokuapp.com/"> WeberHead Design </a>
                 <h1 className="porta">This is my First website to show front-end work.</h1>
                 <h1 className="porta">Full​ ​Responsive​ ​Website​ which is coded in html5 and css3.</h1> 
                

              </div>
              <div className="contact" >
              <h1 className="contacts"> Get in Touch</h1>  
              <img className="imageaa" alt="" src="nithin2.jpg"/>
              <p className="contactp">
                </p>
                <p className="contactppe">
                 I can help with the following:
                </p>
               
                <h1 className="contactppp"> <i className="fa fa-check-circle-o fa-2X"></i>  Front-end development with React js,Express, HTML 5, CSS 3,jQuery</h1>
                <h1 className="contactppp"> <i className="fa fa-check-circle-o fa-2X"></i>  Back-end development with  nodejs,MySQL and Mongo DB </h1><br />
                <h1 className="contactppp"> <i className="fa fa-check-circle-o fa-2X"></i>  UI development </h1><br />
               
                <address>
                  <p className="contactno" id="contact"> Drop a mail if i can help you 
                      <a className="maillinks" href="mailto:nithinmtp@gmail.com"> nithimtp@gmail.com </a>
                  </p>
                </address>
              </div>






      </div>
    );
  }
}

export default Details;
