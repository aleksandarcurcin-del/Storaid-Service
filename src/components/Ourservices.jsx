import './Ourservices.css'
import Tiles from "./Tiles"

function Ourservices() {
  return (
    <section className="ourservices">
        <div className="container">
            <div className="ourservices-top">
                <div className="ourservices-title">
                    <h4>Our Services</h4>
                    <h3 className="ourservices-h3">Specialized Storage for Every Special Item</h3>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida.</p>
            </div>
            <div className="ourservices-bottom">
                <div className="ourservices-bottom-left">
                    <div className="ourservices-tiles-left">
                        <div className="tiles-box">
                            <Tiles
                                title="Diverse Unit Sizes"
                                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
                            />
                        </div>
                    </div>
                    <div className="ourservices-tiles-left">
                        <div className="tiles-box">
                            <Tiles
                                title="Moving Assistance"
                                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
                            />
                        </div>
                    </div>
                </div>
                <div className="ourserices-box"></div>
                <div className="ourservices-bottom-right">
                    <div className="ourservices-tiles-right">
                        <div className="tiles-box">
                            <Tiles
                                title="Vehicle Storage"
                                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
                            />
                        </div>
                    </div>
                    <div className="ourservices-tiles-right">
                        <div className="tiles-box">
                            <Tiles
                                title="Top-Notch Security"
                                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Ourservices