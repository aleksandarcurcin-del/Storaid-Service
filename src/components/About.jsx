import './About.css'
import Buttons from "./Buttons"
import Tiles from "./Tiles"

function About() {
  return (
    <section className="about">
        <div className="container">
            <div className="about-flex">
                <div className="about-left">
                    <div className="box-1"></div>
                    <div className="box-2">
                        <div className="box-text">
                            <div className="box-text1">
                                <h2 className="yellow">12+</h2>
                                <p>Years of Experience</p>
                            </div>
                            <div className="box-text2">
                                <h2 className="yellow">150K+</h2>
                                <p>Satisfied Clients</p>
                            </div>
                            <div className="box-text3">
                                <h2 className="yellow">35+</h2>
                                <p>Warehouse</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-right">
                    <div className="about-text">
                        <h4>About Us</h4>
                        <h3>Providing a Safe Space for Your Treasured Items</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi, non sodales augue. Phasellus eget elit gravida.</p>
                    </div>
                    <div className="tiles-component">
                        <div className="tiles-about">
                            <div className="tiles-box">
                                <div className="tile-about-text">
                                    <Tiles 
                                        title="Vision"
                                        text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan tium doloremque laudantium."
                                    />
                                </div>
                            </div>
                            <div className="tiles-box">
                                <div className="tile-about-text">
                                    <Tiles 
                                        title="Mission"
                                        text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan tium doloremque laudantium."
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="about-lower">
                        <div className="about-btn">
                            <Buttons text="Discover More"/>
                        </div>

                        <div className="about-info">
                            <img src="/images/mobileicon.svg" alt="" />
                            <div className="about-info-right">
                                <h5>More Information</h5>
                                <h6>+46 8 123 122 44</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About