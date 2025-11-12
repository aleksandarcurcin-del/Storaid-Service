import { useState, } from 'react';
import { Link} from "react-router-dom"
import './Pricelist.css'
import Buttons from "./Buttons";
import checkmarkGreen from '/images/checkicon.svg'
import checkmarkyellow from '/images/yellowcheckicon.svg'


function Pricelist({ title, price }) {

    const [isHovered, setIsHovered] = useState(false)


  return (
        <div className="pricing-card"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <h5>{title}</h5>
            <div className="prices">
                <h5 className="dollar-icon">$</h5>
                <h3>{price}</h3>
                <h6>/month</h6>
            </div>
            <p>Phasellus sollicitudin sapien eu massa accumsan, quis semper odio suscipit.</p>
            <div className="underline"></div>

            <div className="pricing-lower">
                <div className="pricing-check">
                    <img className="check-icon" src={isHovered ? checkmarkyellow : checkmarkGreen} alt="checkmark icon" /> <p>Nam nec ipsum in dolor</p>
                </div>
                <div className="pricing-check">
                    <img className="check-icon" src={isHovered ? checkmarkyellow : checkmarkGreen} alt="checkmark icon" /> <p>Fusce nec ligula ut arcu</p>
                </div>
                <div className="pricing-check">
                    <img className="check-icon" src={isHovered ? checkmarkyellow : checkmarkGreen} alt="checkmark icon" /> <p>Aliquam pulvinar arcu in</p>
                </div>
                <div className="pricing-check">
                    <img className="check-icon" src={isHovered ? checkmarkyellow : checkmarkGreen} alt="checkmark icon" /> <p>Duis gravida enim porta</p>
                </div>
                <div className="pricing-check">
                    <img className="check-icon" src={isHovered ? checkmarkyellow : checkmarkGreen} alt="checkmark icon" /> <p>Etiam eget libero non ligula</p>
                </div>
                <div className="rent-btn">
                    <Link to="/booking">
                        <Buttons text="Rent Now" />
                    </Link>
                </div>
            </div>
        </div>
  );
}

export default Pricelist;