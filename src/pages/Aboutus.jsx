import React from 'react'
import './Aboutus.css'
import About from '../components/About'
import Brands from '../components/Brands'
import Subscribe from '../components/Subscribe'
import Testimonialsextra from '../components/Testimonialsextra'



function Aboutus() {
  return (
    <>
        <div className="aboutus-color">
        <div className="container">
            <div className="aboutus">
            <h1>About Us</h1>
            <p className="aboutus-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            </div>
        </div>
        </div>
        
        <About />
        <Brands />  
        <Testimonialsextra />


        <section className="choose-background">
        <div className="container">
            <div className="choose-flex">
                <div className="choose-left">
                    <h4>Why Choose Us</h4>
                    <h3>Choose Us for Exceptional Storage Solutions</h3>
                    <div className="choose-content">
                        <img src="/images/choose1.svg" alt="" />
                        <div className="content-1">
                            <h5>Security and Safety</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        </div>
                    </div>
                    <div className="choose-content">
                        <img src="/images/choose2.svg" alt="" />
                        <div className="content-1">
                            <h5>Flexible and Affordable</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        </div>
                    </div>
                    <div className="choose-content">
                        <img src="/images/choose3.svg" alt="" />
                        <div className="content-1">
                            <h5>Clean and Well-Maintained Facilities</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        </div>
                    </div>
                    <div className="choose-content">
                        <img src="/images/choose4.svg" alt="" />
                        <div className="content-1">
                            <h5>24/7 and Convenient Access</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        </div>
                    </div>
                </div>
                <div className="choose-right">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida.</p>
                    <div className="choose-box"></div>
                </div>
            </div>
        </div>
        </section>
        <Subscribe />
        
    </> 
  )
}

export default Aboutus