import React, { useEffect, useRef, useState } from 'react';
import '../assets/Styles/Card.css';
import { data } from '../assets/data';

export const Card = () => {

    const listCard = useRef();

    return (
        <div className="card-container">
            <div className="card">
                <div className="card-img">
                    <img src="x" alt="IMG"/>
                    
                </div>
                <div className='card-title'>
                    <h4>Expecialista con experiencia</h4>
                </div>
                <div className="card-text">
                    <p>Lorem ipsum dolor sit amet consectetur, 
                    adipisicing elit. Culpa id impedit atque 
                    at corrupti ea cumque ratione, beatae eius
                    nisi quam! Nobis, illo consectetur amet 
                    provident vero maiores officia ipsam.</p>
                </div>
            </div>
        </div>
    )
}