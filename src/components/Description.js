import React from 'react';
import Label from './Label';


export default function Description(props){
    return(
        <div className="description">
            <Label text="genero" info={props.gender}/>
            <Label text="especie" info={props.species}/>
            <Label text="estado" info={props.status}/>
        </div>
       
    );
}