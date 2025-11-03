import './Git.css'
import Buttons from './Buttons'
import { useState } from 'react'

function Git() {
    const [formContent, setFormContent] = useState({ name: '', email: '', phoneNumber: '', subject: '', comment: '' })
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormContent({...formContent, [name]: value})
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
            setFormContent({ name: '', email: '', phoneNumber: '', subject: '', comment: '' })
        }
    }

    if (submitted) {
        return (
            <div className="container">
                <div className="pop-up">
                    <h1>Thank you for your comment!</h1>
                    <p>We will return with information as soon as possible</p>
                    <Buttons type="submit" className="submitted" onClick={handleOk} text="OK"/>
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
                                    Your Name
                                    <input id="text" type="text" name="name" value={formContent.name} onChange={handleChange} required placeholder="Your name"/>
                                </div>
                                <div className="direction2">
                                    <div className="direction3">
                                        Email
                                        <input id="email2" type="email" name="email" value={formContent.email} onChange={handleChange} required placeholder="Email"/>
                                    </div>
                                    <div className="direction3">
                                        Telephone
                                        <input id="telephone" type="tel" name="phoneNumber" value={formContent.phoneNumber} onChange={handleChange} required placeholder="Telephone"/>
                                    </div>
                                </div>
                                <div className="direction">
                                    Subject
                                    <input id="subject" type="subject" name="subject" value={formContent.subject} onChange={handleChange} required placeholder="Subject"/>
                                </div>
                                <div className="direction-big">
                                        Comments / Questions
                                        <textarea id="comment" name="comment" value={formContent.comment} onChange={handleChange} required placeholder="Comments"></textarea>
                                </div>
                                <button className="git-btn" type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Git