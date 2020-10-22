import React from 'react';
import portal from '../assets/portal.png'

export default function Portal(props){
    console.log(props.state)
    return (
        <img src={portal} alt="Portal" className={props.state}></img>
        
    )
}