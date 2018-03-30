import React from 'react';
import { Link } from 'react-router-dom'
import '../css/header.css';

const Header = () => {
    return(
    <div className='appHeader'>
        <header>
            <Link to='/' id='HomeLink'>WWAMI Pipeline</Link>
            <nav>
                <Link to='/map'>Map</Link>
                <Link to='/search'>Search</Link>
            </nav>
        </header>
    </div>
    )
}
 
export default Header