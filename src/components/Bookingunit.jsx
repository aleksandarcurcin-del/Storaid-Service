import React from 'react'
import './Bookingunit.css'
import { useState } from 'react'
import Contactform from './Contactform'
import Commentform from './Commentform'
import Buttons from './Buttons'


function Bookingunit() {
    const [formContent, setFormContent] = useState({ name: '', email: '', selectedUnit: '', purpose: '' })
    const [errors, setErrors] = useState({})
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormContent({...formContent, [name]: value})

        if(value.trim() === '') {
            setErrors(prevErrors => ({...prevErrors, [name]: `The ${name} field is required.`}))
        } else {
            setErrors(prevErrors => ({...prevErrors, [name]: ''}))
        }
    }


    
    const handleSubmit = async (e) => {
        e.preventDefault()

        const newErrors = {}
        Object.keys(formContent).forEach(field => {
            if(formContent[field].trim() === '') {
                newErrors[field] = `The ${field} field is required.`
            }
        })

        if(Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            return
        }

        const res = await fetch('https://win25-jsf-assignment.azurewebsites.net/api/booking', {
            method: 'post',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(formContent)
        })



        if (res.ok) {
            setSubmitted(true)
            setFormContent({ name: '', email: '', selectedUnit: '', purpose: ''})
        }
    }


    const handleOk = () => {
        setSubmitted(false)
    }

    if (submitted) {
        return (
            <div className="container">
                <div className="pop-up">
                    <h2>Thank you for booking with us!</h2>                  
                    <Buttons type="submit" className="submitted-btn" onClick={handleOk} text="OK"/>
                </div>
            </div>
        )
    }

    return (
        <section className="booking-unit">
            <div className="container">
                <div className="booking-flex">
                    
                    <div className="booking-left">
                        <h4>Booking Unit</h4>
                        <div className="booking-text">
                            <h3>Book Your Storage Unit Now & Simplify Your Life!</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida.</p>
                        </div>
                        
                    </div>
                    <div className="booking-right">
                        <div className="booking-box"></div>
                        <div className="booking-background">
                            <form onSubmit={handleSubmit} noValidate>
                                <div className="booking-form">
                                    <div className="direction2">
                                        <div className="direction3">
                                            <Contactform id="name" label="Your Name" className="input form-name" type="text" name="name" value={formContent.name} onChange={handleChange} required placeholder="Your name" error={errors.name}  />
                                        </div>
                                        <div className="direction3">
                                            <Contactform id="email2" label="Email" className="input form-email" type="email" name="email" value={formContent.email} onChange={handleChange} required placeholder="Email" error={errors.email} />
                                        </div>
                                    </div>
                                    <div className="direction">
                                        <Contactform id="selectedUnit" label="Choose Unit" className="input form-unit" type="selectedUnit" name="selectedUnit" value={formContent.selectedUnit} onChange={handleChange} required placeholder="Choose unit" error={errors.selectedUnit} />        
                                    </div>
                                    <div className="direction-big">
                                        <Commentform id="purpose" label="Storage purpose" name="purpose" value={formContent.purpose} onChange={handleChange} required placeholder="Describe your storage purpose so that we can match your request"  error={errors.purpose}/>
                                    </div>
                                    <Buttons type="submit" className="booking-btn" text="Book Unit" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Bookingunit