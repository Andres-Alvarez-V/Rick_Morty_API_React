import React from 'react';


export default function NavigationArea(props){
    return(
       <div className="character-name">
            <h2 className="character-name_name">{props.name}</h2>
       </div>
    );
}