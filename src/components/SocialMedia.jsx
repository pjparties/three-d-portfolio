import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Fcard2 from './Fcard2'
import Pricings from './Pricings'
import Pagetitle from './Pagetitle'

const SocialMedia = ({title}) => {
    title = "Social Media Marketing"    
    return (
        <div className='wrapper-body'>
            <Navbar/>
            <Pagetitle title={'Digital Marketing'}/>

            <Fcard2/>

            <Pricings/>


            <Footer/>

        </div>
    )
}

export default SocialMedia