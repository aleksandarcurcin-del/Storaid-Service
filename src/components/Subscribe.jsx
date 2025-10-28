import './Subscribe.css'

function Subscribe() {
  return (
    <div className="subscribe">
        <div className="container">
            <div className="subscribe-flex">
                <div className="subscribe-left">
                    <h3>Subscribe Our Newsletter</h3>
                    <p>Subscribe to our newsletter to receive early discount offers, updates and info</p>
                </div>
                <div className="subscribe-right">
                    <label For="email"></label>
                    <input id='email' type="email" placeholder='Enter your email' />
                    <button className="subscribe-btn">Submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Subscribe