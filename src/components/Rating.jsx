import React from 'react'
import './Testimonials.css'

function Rating({ item }) {
  return (
        <div className="review">
            <img className="stars" src="/images/fivestars.svg" alt="" />
            <p>{item.comment}</p>
            <div className="review-bottom">
                <div className="circle"><img className="circle-inner" src={item.imageUrl} alt="" /></div>
                <div className="person">
                    <h6>{item.name}</h6>
                    <p className="customer">{item.companyName}</p>
                </div>
                <img src={item.rating} alt="" />
            </div>
        </div>
  )
}

export default Rating