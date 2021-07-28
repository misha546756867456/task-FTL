import React, {useEffect, useState} from 'react';
import axios from "axios";
import Card from "./Card/Card";
import './CardList.css'
import SectionName from "../SectionName/SectionName";

const CardList = () => {
    const [pokemonInfo, setPokemonInfo] = useState([])

    useEffect(() => {
        axios('db.json')
            .then(data => setPokemonInfo(data.data))
    }, [])

    const pokemonCard = pokemonInfo.map((el) => (
        <Card
            key={el.id}
            photo={el.photo}
            name={el.name}
            generation={el.generation}
            type={el.type}
            btnColor={el.btnColor}
            typeColor={el.typeColor}
            className={el.className}
        />
    ))

    return (
        <div>
            <SectionName title='Cards' />
            <section className='cards'>
                {pokemonCard}
            </section>
            <SectionName title="Map" className='map' />
        </div>
    );
};

export default CardList;