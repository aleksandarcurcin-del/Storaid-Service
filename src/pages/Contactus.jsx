import React from 'react'
import Titlecomponent from '../components/Titlecomponent'
import Ourservices from '../components/Ourservices'
import Testimonialsextra from '../components/Testimonialsextra'
import Faq from '../components/Faq'
import Book from '../components/Book'

function Contactus() {
  return (
    <>
      <Titlecomponent Title="Contact Us" Text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." />
      <Ourservices />
      <Testimonialsextra />
      <Faq />
      <Book />
    </>
  )
}

export default Contactus