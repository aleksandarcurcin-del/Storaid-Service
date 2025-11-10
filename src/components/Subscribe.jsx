
import Buttons from './Buttons'
import Emailform from './Emailform'
import './Subscribe.css'
import { useState } from 'react'

function Subscribe() {
    const [formContent, setFormContent] = useState({ email: ''})
    const [errors, setErrors] = useState({})
    const [submitted, setSubmitted] = useState(false)
    

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormContent({...formContent, [name]: value})

        if(value.trim() === '') {
            setErrors(prevErrors => ({...prevErrors, [name]: ``}))
        } else {
            setErrors(prevErrors => ({...prevErrors, [name]: ''}))
        }
    }




    const handleOk = () => {
        setSubmitted(false)
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault()


    

        const res = await fetch('https://win25-jsf-assignment.azurewebsites.net/api/subscribe', {
            method: 'post',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(formContent)
        })



        if (res.ok) {
            setSubmitted(true)
            const data = await res.text()
            console.log(data)
            setFormContent({ email: ''})
            setErrors({})
        } else {
            const data = await res.json()
            console.log(data)
        }

     
    }

    if (submitted) {
        return (
            <div className="container">
                <div className="pop-up">
                    <h2>Your email was successfully registered to the newsletter list</h2>                   
                    <Buttons type="submit" className="submitted-btn" onClick={handleOk} text="OK"/>
                </div>
            </div>
        )
    }
    
    

  return (
    <div className="subscribe">
        <div className="container">
            <div className="subscribe-flex">
                <div className="subscribe-left">
                    <h3>Subscribe Our Newsletter</h3>
                    <p>Subscribe to our newsletter to receive early discount offers, updates and info</p>
                </div>
                <div className="subscribe-right">
                    <form onSubmit={handleSubmit} noValidate>
                        <div className="subscribe-form">
                            <Emailform id="email" className="form-email" type="email" name="email" value={formContent.email} onChange={handleChange} required placeholder="Enter your email " error={errors.email} />
                            <Buttons className="subscribe-btn" type="submit" text="Submit" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Subscribe