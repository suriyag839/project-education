import React from 'react'
import { blog } from "../../../dummydata"
import "./footer.css"
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa6";
import { FaPaperPlane } from "react-icons/fa";
import { FaMapMarkedAlt } from "react-icons/fa";

function Footer() {
    return (
        <>
          <section className='newletter'>
            <div className='container flexSB'>
              <div className='left row'>
                <h1>  Stay tune and get the latest update</h1>
                <span>For more info : </span>
              </div>
              <div className='right row'>
                <input type='text' placeholder='Enter email address' />
                <i className='fa fa-paper-plane'><FaPaperPlane /></i>
              </div>
            </div>
          </section>
          <footer>
            <div className='container padding'>
              <div className='box logo'>
                <h1>CLASSON</h1>
                <span>ONLINE EDUCATION & LEARNING PLATFORM</span>
               
    
                <i className='fab fa-facebook-f icon'></i>
                <i className='fab fa-twitter icon'></i>
                <i className='fab fa-instagram icon'></i>
              </div>
              <div className='box link'>
                <div className='l'>
                <h3>Explore</h3>
                <ul>
                  <li>About </li>
                  <li>Services</li>
                  <li>Courses</li>
                  <li>Blog</li>
                  <li>Contact </li>
                </ul>
                </div>
                
              </div>
              <div className='box link'>
                <div className='l'>
                <h3>Quick Links</h3>
                <ul>
                  <li>Contact</li>
                  <li>Pricing</li>
                  <li>Terms & Conditions</li>
                  <li>Privacy</li>
                  <li>Feedbacks</li>
                </ul>
              </div>
                </div>
               
         
              <div className='box last'>
                <div className='l'> 
                <h3>Have a Questions?</h3>
                <ul>
                  <li>
                    <i className='fa fa-map'><FaMapMarkedAlt /></i>
                    <h4> 101 cross st,kill burn,Anna nagar, Chennai</h4>
                  </li>
                  <li>
                    <i className='fa fa-phone-alt'><FaPhoneAlt /></i>
                    <h4>+91 9025700897</h4>
                  </li>
                  <li>
                    <i className='fa fa-paper-plane'><MdEmail /></i>
                    <h4>classoninfo@gmail.com</h4>
                  </li>
                </ul>
                </div>
            
              </div>
            </div>
          </footer>
          <div className='legal'>
            
          </div>
        </>
      )
}

export default Footer