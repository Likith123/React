import React from 'react'
import './Home.css'
import Product from './Product'
function Home() {
  return (
    <div className="home">
        <div className = "home-container">
            <img src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="Amazon Home"  className = "home-image"/>
            <div className="home-row">
              <Product title="The lean startup Constant innovsation creates radically successful businesses paperback" image ="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" price={19.99} rating={5} id={1}/>
              <Product title="Ironman Image" image ="https://i.pinimg.com/originals/84/10/ea/8410ea80c6646aad1df861362f30744e.jpg" price={29.99} rating={5} id={2}/>
              <Product title="DoctorStrange" image ="https://i.annihil.us/u/prod/marvel/html_blocks_assets/doctor-strange/d-strange-poster.jpg" price={19.99} rating={5} id={3}/>
 
            </div>
            <div className="home-row">
                <Product title="The lean startup" image ="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" price={19.99} rating={4} id={4}/>
              <Product title="Ironman Image" image ="https://i.pinimg.com/originals/84/10/ea/8410ea80c6646aad1df861362f30744e.jpg" price={29.99} rating={5} id={5}/>
              <Product title="DoctorStrange" image ="https://i.annihil.us/u/prod/marvel/html_blocks_assets/doctor-strange/d-strange-poster.jpg" price={19.99} rating={5} id={6}/>
              <Product title="The lean startup" image ="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" price={19.99} rating={5} id={7}/>
            </div>
            <div className="home-row">
                
            </div>
        </div>
    </div>
  )
}

export default Home