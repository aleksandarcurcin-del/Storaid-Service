import './Cards.css'
import { useState } from 'react';
import calendarIconGreen from '/images/calendaricongreen.svg'
import calendarIcon from '/images/calendaricon.svg'

function Cards({ item }) {
  const [isHovered, setIsHovered] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div className={`cards-inner ${setIsExpanded ? 'isExpanded' : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="card-box">
        <div className="cardbox-inner">
          <img className="blog-image" src={item.imageUrl} />
        </div>
        <div className="card-content">
          <div className="calendar">
            <img className="calendar-icon" src={isHovered ? calendarIconGreen : calendarIcon} alt="" /> <p>{item.created}</p>
          </div>
          <div className="card-text">
            <h6>{item.title}</h6>
            <p
              id={`desc ${item.id}`}
              className={`desc ${isExpanded ? "isExpanded" : "clamped"}`}
            >
              {item.description}
            </p>
          </div>
          <div className="card-link">
            <a className="read-more" href="#" onClick={(e) => {
              e.preventDefault()
              setIsExpanded(!isExpanded)
            }}>
              {isExpanded ? 'Read less' : 'Read more →'}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards