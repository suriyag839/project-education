import React from 'react'
import Back from "../common/back/Back"
import "./contact.css"

const Contact = () => {
    const map = ' https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d76313.96588026462!2d80.21859045467697!3d13.15194524736141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1737770325288!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"'
    return (
      <>
        <Back title='Contact us' />
        <section className='contacts padding'>
          <div className='container shadow flexSB'>
            <div className='left row'>
              <iframe src={map}></iframe>
            </div>
            <div className='right row'>
              <h1>Contact us</h1>
              <p>We're open for any suggestion or just to have a chat</p>
  
              <div className='items grid2'>
                <div className='box'>
                  <h4>ADDRESS:</h4>
                  <h4> 101 cross st,kill burn,Anna nagar, Chennai</h4>
                </div>
                <div className='box'>
                  <h4>EMAIL:</h4>
                  <h4>classoninfo@gmail.com</h4>
                </div>
                <div className='box'>
                  <h4>PHONE:</h4>
                  <h4>+91 9025700897</h4>
                </div>
              </div>
  
              <form action=''>
                <div className='flexSB'>
                  <input type='text' placeholder='Name' />
                  <input type='email' placeholder='Email' />
                </div>
                <input type='text' placeholder='Subject' />
                <textarea cols='30' rows='10'>
                  Create a message here...
                </textarea>
                <button className='primary-btn'>SEND MESSAGE</button>
              </form>
  
              <h3>Follow us here</h3>
              <span>FACEBOOK TWITTER INSTAGRAM DRIBBBLE</span>
            </div>
          </div>
        </section>
      </>
    )
}

export default Contact