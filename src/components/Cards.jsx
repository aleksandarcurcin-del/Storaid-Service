import './Cards.css'
import { Link } from 'react-router-dom'

function Cards({ item }) {



  return (
    <Link to={`/cards-api/${item.id}`}>
      <div className="item">
        <div className="cards-inner">
          <div className="card-box">
            <div className="cardbox-inner">
              <img className="blog-image" src={item.imageURL} />
            </div>
            <div className="card-content">
              <div className="calendar">
                <img className="calendar-icon" src="/images/calendaricon.svg" alt="" /> <p>{item.date}</p>
              </div>
              <div className="card-text">
                <h6>{item.title}</h6>
                <p>{item.text}</p>
              </div>
              <div className="card-link">
                <a className="read-more" href="/">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Cards