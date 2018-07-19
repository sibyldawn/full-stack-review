import React from 'react';
import image from '../image.gif';
import './Header.css';

export default function Header(){
    return (
        <div className="header">
            <h1>Word Bank</h1>
            <img src= {image} alt="background"/>
        </div>
    )
}