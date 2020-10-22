import React from 'react';


export default function Avatar(props){
    return(

       <div className="character">
            <img className="character_avatar" src={props.image} alt={props.name}></img>
       </div>
    );
}