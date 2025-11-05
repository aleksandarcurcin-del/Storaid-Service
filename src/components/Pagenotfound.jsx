import React from 'react'
import './Pagenotfound.css'
import Buttons from './Buttons'
import { Link } from "react-router-dom"

function Pagenotfound() {
  return (
    <section className="notfound">
        <div className="notfound-content">
            <h5>Oops!</h5>
            <h1>Page Not Found</h1>
            <p>Sorry, the page you are looking for does not exist. It may have been moved, removed altogether or is temporarily unavailable.</p>
            <Link to="/">
                <Buttons type="submit" text="Back to Home" />
            </Link>
        </div>
    </section>
  )
}

export default Pagenotfound