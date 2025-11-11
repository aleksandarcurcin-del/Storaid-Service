import './Book.css'
import Buttons from "./Buttons"
import { Link} from "react-router-dom"

function Book() {
  return (
    <section className="book">
        <div className="book-color">
            <div className="container">
                <div className="book-content">
                    <div className="book-text">
                        <h3>Looking for Secure and Flexible Storage? Find Your Perfect Fit With Us.</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida.</p>
                    </div>
                    <div className="book-btn">
                        <Link to="/booking">
                            <Buttons className="book-btn" type="submit" text="Book Now"/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Book