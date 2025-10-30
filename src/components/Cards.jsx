import './Cards.css'

function Cards({ date, title, text, imageURL }) {

  
  return (
    <div className="cards-inner">
      <div className="card-box">
        <div className="cardbox-inner">
          <img className="blog-image" src={imageURL} />
        </div>
        <div className="card-content">
          <div className="calendar">
            <img className="calendar-icon" src="/images/calendaricon.svg" alt="" /> <p>{date}</p>
          </div>
          <div className="card-text">
            <h6>{title}</h6>
            <p>{text}</p>
          </div>
          <div className="card-link">
            <a className="read-more" href="/">Read More</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards