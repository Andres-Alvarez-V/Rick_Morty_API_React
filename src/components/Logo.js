import React from 'react';
import logo_img from '../assets/Rick_and_Morty_logo.png';


export default function Logo(){
    return(
        <div className="logo">
            <img src= {logo_img} alt="logo"></img>
        </div>
 );
}