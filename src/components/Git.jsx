import './Git.css'
import Buttons from './Buttons'
import { useState } from 'react'
import Contactform from './Contactform'
import Commentform from './Commentform'

function Git() {
    const [formContent, setFormContent] = useState({ name: '', email: '', subject: '', comment: '' })
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

    const handleOk = () => {
        setSubmitted(false)
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault()



        const res = await fetch('https://win25-jsf-assignment.azurewebsites.net/api/contact', {
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
            setFormContent({ name: '', email: '', subject: '', comment: '' })
        } else {
            const data = await res.json()
            console.log(data)
        }


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
    }




    if (submitted) {
        return (
            <div className="container">
                <div className="pop-up">
                    <h2>Thank you for contacting us. We have received your message and will respond to you within 1-2 business days.</h2>                   
                    <Buttons type="submit" className="submitted-btn" onClick={handleOk} text="OK"/>
                </div>
            </div>
        )
    }
    

    return (
        <section className="git">
            <div className="container">
                <div className="git-flex">
                    <div className="git-left">
                        <h4>Get in Touch</h4>
                        <h3>Get Personalized Assistance - Contact Us</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo</p>
                        <div className="git-box"></div>
                    </div>
                    <div className="git-right">
                        <form onSubmit={handleSubmit} noValidate>
                            <div className="git-form">
                                <div className="direction">
                                    <Contactform id="name" label="Your Name" className="input form-name" type="text" name="name" value={formContent.name} onChange={handleChange} required placeholder="Your name" error={errors.name} />
                                </div>
                                <div className="direction2">
                                    <div className="direction3">
                                        <Contactform id="email2" label="Email" className="input form-email" type="email" name="email" value={formContent.email} onChange={handleChange} required placeholder="Email" error={errors.email} />
                                    </div>
                                    <div className="direction3">
                                        <Contactform id="phonenumber" label="Phonenumber" className="input form-phonenumber" type="tel" name="phoneNumber" placeholder="Phonenumber" />
                                    </div>
                                </div>
                                <div className="direction">
                                    <Contactform id="subject" label="Subject" className="input form-subject" type="subject" name="subject" value={formContent.subject} onChange={handleChange} required placeholder="Subject" error={errors.subject} />
                                </div>
                                <div className="direction-big">
                                    <Commentform id="comment" label="Comments / Questions" name="comment" value={formContent.comment} onChange={handleChange} required placeholder="Comments"  error={errors.comment}/>
                                </div>
                                <Buttons type="submit" className="git-btn" text="Submit"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Git