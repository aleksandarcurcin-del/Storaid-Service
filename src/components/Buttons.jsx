import './Buttons.css'

function Buttons({ className, text }) {
  return (
    <div className={`${className}`}>
        <button className="btn">
            {text}
        </button>
    </div>
  )
}

export default Buttons