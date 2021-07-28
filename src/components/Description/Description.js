import React from 'react';
import './Description.css'
import DescriptionText from "./DescriptionText";

export const Description = () => {
    return (
        <section className='description__info'>
            <DescriptionText />
            <div className="description__info-inner">
                <img src={"welcome_screen_img.svg"} alt="welcome-screen-img"/>
            </div>
        </section>
    );
};