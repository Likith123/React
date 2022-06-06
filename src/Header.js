import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
function Header() {
  return (
    <div className = "header">
        <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Amazon-logo" className="header-logo"/>
        <div className='header-searcher'>
            <input className ="header-input" type="text"/>
            <SearchIcon className='header-searchIcon'/>
        </div>
        <div className='header-nav'>
            <div className="nav-option">
                <span className='option1'>Hello</span>
                <span className="option2">Sign In</span>
            </div>
            <div className="nav-option">
                <span className='option1'>Returns</span>
                <span className="option2">&Orders</span>
            </div>
            <div className="nav-option">
                <span className='option1'>Your</span>
                <span className="option2">Prime</span>
            </div>
            <div className='backet-icon'>
                <ShoppingBasketOutlinedIcon className='basket'/>
                <span className='option2 basketCount'>0</span>
            </div>
        </div>
    </div>
  )
}

export default Header