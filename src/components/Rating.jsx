import React from 'react'
import './Testimonials.css'

function Rating({ item }) {
  return (
        <div className="review">
            <div className="stars">{item.rating}/5</div>
            <p>{item.comment}</p>
            <div className="review-bottom">
                <div className="circle"><img className="circle-inner" src={item.avatarUrl} alt="" /></div>
                <div className="person">
                    <h6>{item.name}</h6>
                    <p className="customer">{item.companyName}</p>
                </div>
            </div>
        </div>
  )
}

export default Rating