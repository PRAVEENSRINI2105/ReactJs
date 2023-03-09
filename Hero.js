import React from 'react';
import grid from './grid.png';

function Hero(){
    return (
        <section>
            <img src={grid} className='hero-grid' alt="grid" />
            <h1 className='hero-header'>Online Experience</h1>
            <p className='hero-text'>Join unique interactive activities led by<br/> one-of-a-kind hosts-all without leaving <br/>home.</p>
        </section>
    )
}

export default Hero;