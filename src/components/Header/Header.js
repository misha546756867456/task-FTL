import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <header className='header'>
            <img className='header-logo' src={"pokemon-logo-svg.svg"} alt="pokemon-logo"/>
        </header>
    );
};

export default Header;