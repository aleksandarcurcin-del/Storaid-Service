import React from 'react'
import './Services.css'
import Titlecomponent from '../components/Titlecomponent'
import Ourservices from '../components/Ourservices'
import Testimonials from '../components/Testimonials'

function Services() {
  return (
    <>
      <Titlecomponent Title="Services" Text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." />
      <Ourservices />
      <section className="testimonials">
        <div className="testimonials-background">
            <div className="container">
                <div className="testimonials-flex">
                    <div className="testimonials-text">
                        <h4>Testimonials</h4>
                        <h3>See What Our Client Have to Say</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida.</p>
                    </div>
                    <div className="testimonials-review">
                        <div className="review-1">
                            <img className="stars" src="/images/fivestars.svg" alt="" />
                            <p>The facility is clean, secure, and easy to access. I felt confident leaving my belongings here knowing they were protected and well cared for.</p>
                            <div className="review-bottom">
                                <div className="circle"><img className="circle-inner" src="https://win25jsfstorage.blob.core.windows.net/images/testimonials/sophie-turner.png" alt="" /></div>
                                <div className="person">
                                    <h6>Sophie Turner</h6>
                                    <p className="customer">Homeowner</p>
                                </div>
                                <img src="/images/testimonialsicon.svg" alt="" />
                            </div>
                        </div>
                        <div className="review-2">
                            <img className="stars" src="/images/fivestars.svg" alt="" />
                            <p>Renting a storage unit was seamless from start to finish. The staff was professional, and the flexible options made it perfect for my growing business needs.</p>
                            <div className="review-bottom">
                                <div className="circle"><img className="circle-inner" src="https://win25jsfstorage.blob.core.windows.net/images/testimonials/liam-anderson.png" alt="" /></div>
                                <div className="person">
                                    <h6>Liam Anderson</h6>
                                    <p className="customer">Small Business Owner</p>
                                </div>
                                <img src="/images/testimonialsicon.svg" alt="" />
                            </div>
                        </div>
                        <div className="review-3">
                            <img className="stars" src="/images/fourstars.svg" alt="" />
                            <p>I needed a short-term storage solution during my move, and this place was ideal. Affordable pricing and great customer service made everything stress-free.</p>
                            <div className="review-bottom">
                                <div className="circle"><img className="circle-inner" src="https://win25jsfstorage.blob.core.windows.net/images/testimonials/emily-carter.png" alt="" /></div>
                                <div className="person">
                                    <h6>Emily Carter</h6>
                                    <p className="customer">Student</p>
                                </div>
                                <img src="/images/testimonialsicon.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    </>
  )
}

export default Services