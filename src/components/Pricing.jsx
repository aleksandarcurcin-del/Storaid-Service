import './Pricing.css'
import Pricelist from "./Pricelist"


function Pricing() {
  return (
    <section className="pricing">
        <div className="container">
            <div className="pricing-title">
                <h4>Pricing Plan</h4>
                <h3 className="pricing-text-color">Find the Perfect Plan for Your Storage Needs</h3>
            </div>
            <div className="pricing-flex">
                <Pricelist title="Small Unit" price="50"/>
                <Pricelist title="Medium Unit" price="50"/>
                <Pricelist title="Large Unit" price="50"/>
                <Pricelist title="Executive Unit" price="50"/>
            </div>
        </div>
    </section>
  )
}

export default Pricing