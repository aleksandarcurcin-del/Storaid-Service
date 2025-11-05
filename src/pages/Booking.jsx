import React from 'react'
import Titlecomponent from '../components/Titlecomponent'
import Bookingunit from '../components/Bookingunit'
import Choose from '../components/Choose'
import Book from '../components/Book'

function Booking() {
    return (
        <>
            <Titlecomponent Title="Booking" Text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." />
            <Bookingunit />
            <Choose />
            <Book />
        </>
    )
}

export default Booking