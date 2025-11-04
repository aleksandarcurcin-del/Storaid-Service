import './Buttons.css'

function Buttons({ className = '', text, ...props }) {
  return (
    
    <button className={className} {...props}>
        {text}
    </button>
    
  )
}

export default Buttons