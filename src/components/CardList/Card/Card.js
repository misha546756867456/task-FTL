import React from 'react';
import './Card.css'
import Button from "../../Button/Button";

const Card = ({name, type, photo, generation, btnColor, className}) => {

    const types = type.map((el, index) => {
        const typeEl = el.split('-')
        return <span key={index} className='single-type' style={{backgroundColor: typeEl[0]}}><span>{typeEl[1]}</span></span>
    })

    return (
        <div className={`card ${className}`}>
            <div className="card__container">
                <img className='card__character-photo' src={photo} alt="character-img"/>
                <p className='card__character-name'>{name}</p>
                <p className='card__character-generation'>Generation: {generation}</p>
                <dl className='card__character-type'><span>Types:</span><p>{types}</p></dl>
                <Button color={btnColor}/>
            </div>
        </div>
    );
};

export default Card;