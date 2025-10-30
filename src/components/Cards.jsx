import './Cards.css'

function Cards({ item }) {

  
  return (
    <div className="cards-inner">
      <div className="card-box">
        <div className="cardbox-inner">
          <img className="blog-image" src={item.imageURL} />
        </div>
        <div className="card-content">
          <div className="calendar">
            <img className="calendar-icon" src="/images/calendaricon.svg" alt="" /> <p>{item.created}</p>
          </div>
          <div className="card-text">
            <h6>{item.title}</h6>
            <p>{item.description}</p>
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