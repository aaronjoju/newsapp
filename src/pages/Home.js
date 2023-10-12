import React from 'react'
import NavbarComp from '../components/NavbarComp'
import CardComp from '../components/CardComp'

const Home = () => {
  return (
    <>
   
    <NavbarComp />
    <div className='homeSection'>
        {/* <Carousel /> */}
    <CardComp />
    </div>
    
    </>
  )
}

export default Home
