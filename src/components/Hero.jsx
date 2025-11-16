import './Hero.css'
import Buttons from "./Buttons"

import { Link} from "react-router-dom"

/* bilden är AI genererad */

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-flex">
          <div className="hero-left">
            <p className="hero-text">Welcome to StorAid</p>
            <h1>Space Simplified, Storage Perfected</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a sem magna. Etiam ac odio sit amet lorem fringilla sodales. Cras lobortis, libero at iaculis luctus, nisi ex pellentesque nisi, at euismod sem ipsum ac dolor.</p>
            <div className="hero-btn">
              <Link to="/booking">
                <Buttons className="hero-btn" type="submit" text="Discover More"/>
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <img className="storage-image3" src="/images/storageimage11.png" alt="man image" />
          </div>
        </div>

      </div>
    </section>
  );
}