import React from 'react'
import './Home.css'
import Product from './Product'
function Home() {
  return (
    <div className="home">
        <div className = "home-container">
            <img src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="Amazon Home"  class = "home-image"/>
        </div>
        <div className="home-row">
            <Product/>
        </div>
        <div className="home-row">
            
        </div>
        <div className="home-row">
            
        </div>

    </div>
  )
}

export default Home