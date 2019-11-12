import React from 'react';
import '../styles/Header.css';

import Logo from '../images/logo.png';

function Header(){
    return(
        <div className='Header'>
            <div className='logo-container'>
                <div className='logo'><img src={Logo}></img></div>
            </div>
        </div>
    )
}

export default Header;