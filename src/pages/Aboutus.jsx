import React from 'react'
import './Aboutus.css'
import About from '../components/About'
import Brands from '../components/Brands'
import Testimonialsextra from '../components/Testimonialsextra'
import Chooseextra from '../components/Chooseextra'
import Titlecomponent from '../components/Titlecomponent'



function Aboutus() {
  return (
    <>
        
        <Titlecomponent Title="About Us" Text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." />
        <About />
        <Brands />  
        <Testimonialsextra />
        <Chooseextra />
        
    </> 
  )
}

export default Aboutus