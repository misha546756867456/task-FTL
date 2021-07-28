import React from 'react';
import './Scroll.css'

const Scroll = () => {

    const handleScroll = () => {
        window.scroll({
            top: 665,
            left: 0,
            behavior: 'smooth',
        });
    }

    return (
        <div className='scroll-wrapper'>
            <p className="scroll-text">Tap to scroll down</p>
            <img className="scroll-btn" onClick={handleScroll} src={"scroll.svg"} alt="scroll-button"/>
        </div>
    )
};
export default Scroll;