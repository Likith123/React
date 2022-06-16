import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import {Link} from 'react-router-dom';
import { useStateValue } from './StateProvider';

function Header() {
    const [{basket}] = useStateValue();
  return (
    <div className = "header">
        <Link to='/'><img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Amazon-logo" className="header-logo"/> </Link>
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
            <Link to='/checkout'>
                <div className='backet-icon'>
                    <ShoppingBasketOutlinedIcon className='basket'/>
                    <span className='option2 basketCount'>{basket.length}</span>
                </div>
            </Link>
            
        </div>
    </div>
  )
}

export default Header