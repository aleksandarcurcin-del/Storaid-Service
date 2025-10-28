import './Hero.css'
import Buttons from "./Buttons"


export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-flex">
          <div className="hero-left">
            <h4 className="hero-text">Welcome to StorAid</h4>
            <h1>Space Simplified, Storage Perfected</h1>
            <p className="p-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a sem magna. Etiam ac odio sit amet lorem fringilla sodales. Cras lobortis, libero at iaculis luctus, nisi ex pellentesque nisi, at euismod sem ipsum ac dolor.</p>
            <div className="hero-btn">
              <Buttons text="Discover More"/>
            </div>
          </div>
          <div className="hero-image">
            <img src="/images/heroimage.svg" alt="" />
          </div>
        </div>

      </div>
    </section>
  );
}