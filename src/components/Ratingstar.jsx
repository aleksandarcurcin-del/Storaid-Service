import React from 'react'
import './Ratingstar.css'

function Ratingstar({ rating }) {

    /* tagit lite hjälp från Hans video */

    const starsMax = 5
    const starsFilled = Math.min(rating, starsMax)
    

    return (
        <div className="rating-stars">
            {
                [...Array(starsFilled)].map((_, index) => (
                    <i key={index} className="green-stars"><img src="/images/greenstar.svg" alt="green stars" /></i>
                ))
            }

        </div>
    )
}

export default Ratingstar