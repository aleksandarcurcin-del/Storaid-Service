import './Git.css'
import Buttons from './Buttons'
import { useState } from 'react'

function Git() {
    const [formContent, setFormContent] = useState({ name: '', email: '', phoneNumber: '', subject: '', comment: '' })
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


    const handleOk = () => {
        setSubmitted(false)
    }

    if (submitted) {
        return (
            <div className="container">
                <div className="pop-up">
                    <h2>Thank you for your comment!</h2>                   
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

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Git