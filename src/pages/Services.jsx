import React from 'react'
import './Services.css'
import Titlecomponent from '../components/Titlecomponent'
import Ourservices from '../components/Ourservices'
import Testimonialsextra from '../components/Testimonialsextra'
import Faq from '../components/Faq'


function Services() {
    return (
        <>
            <Titlecomponent Title="Services" Text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." />
            <Ourservices />
            <Testimonialsextra />
            <Faq />

        </>
    )
}

export default Services