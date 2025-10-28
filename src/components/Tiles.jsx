import './Tiles.css'

function Tiles({ title, text}) {
  return (
    
    <div className={`tiles`}>
        <h5 className="tiles-title">{title}</h5>
        <p className="tiles-text">{text}</p>
    </div>

  )
}

export default Tiles