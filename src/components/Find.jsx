import './Find.css'

function Find() {
  return (
    <section className="find">
        <div className="container">
            <div className="find-flex">
                <div className="find-left">
                    <img src="/images/findimage.svg" alt="" />
                </div>
                <div className="find-color">
                    <div className="find-right">
                        <h3>Find Us On:</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        <div className="find-content">
                            <div className="find-content-inner">
                                <div className="find-circle"><img className="find-circle-inner" src="/images/findphone.svg" alt="" /></div>
                                <div className="find-text">
                                    <h5>Call Center</h5>
                                    <p>+46 8 123 122 44</p>
                                </div>
                            </div>
                            <div className="find-content-inner">
                                <div className="find-circle"><img className="find-circle-inner" src="/images/findemail.svg" alt="" /></div>
                                <div className="find-text">
                                    <h5>Email Address</h5>
                                    <p>contact@domain.com</p>
                                </div>
                            </div>
                            <div className="find-content-inner">
                               <div className="find-circle"><img className="find-circle-inner" src="/images/findlocation.svg" alt="" /></div>
                                <div className="find-text">
                                    <h5>Location</h5>
                                    <p>Klarabergsviadukten 90, Stockholm</p>
                                </div>
                            </div>
                        </div>
                        <div className="find-socialmedia">
                            <h5>Our Social Media</h5>
                            <div className="find-underline"></div>
                            <a href="https://www.facebook.com/">
                                <img src="/images/Facebook.svg" alt="facebook" />
                            </a>
                            <a href="https://x.com/">
                                <img src="/images/Humble.svg" alt="X/twitter" />
                            </a>
                            <a href="https://www.instagram.com/">
                                <img src="/images/Instagram.svg" alt="Instagram" />
                            </a>
                            <a href="https://www.youtube.com/">
                                <img src="/images/Youtube.svg" alt="youtube" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Find