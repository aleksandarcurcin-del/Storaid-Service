import './Pricelist.css'
import Buttons from "./Buttons";



function Pricelist({ title, price }) {
  return (
        <div className="pricing-card">
            <h5>{title}</h5>
            <div className="prices">
                <img className="dollar-icon" src="/images/dollaricon.svg" alt="" />
                <h3>{price}</h3>
                <h6>/month</h6>
            </div>
            <p>Phasellus sollicitudin sapien eu massa accumsan, quis semper odio suscipit.</p>
            <div className="underline"></div>

            <div className="pricing-lower">
                <div className="pricing-check">
                    <img className="check-icon" src="/images/checkicon.svg" alt="" /> <p>Nam nec ipsum in dolor</p>
                </div>
                <div className="pricing-check">
                    <img className="check-icon" src="/images/checkicon.svg" alt="" /> <p>Fusce nec ligula ut arcu</p>
                </div>
                <div className="pricing-check">
                    <img className="check-icon" src="/images/checkicon.svg" alt="" /> <p>Aliquam pulvinar arcu in</p>
                </div>
                <div className="pricing-check">
                    <img className="check-icon" src="/images/checkicon.svg" alt="" /> <p>Duis gravida enim porta</p>
                </div>
                <div className="pricing-check">
                    <img className="check-icon" src="/images/checkicon.svg" alt="" /> <p>Etiam eget libero non ligula</p>
                </div>
                <div className="rent-btn">
                    <Buttons text="Rent Now" />
                </div>
            </div>
        </div>
  );
}

export default Pricelist;