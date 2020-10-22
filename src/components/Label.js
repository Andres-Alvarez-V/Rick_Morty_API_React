import React from 'react';


export default function Label(props){

    return(
       <>
            <h3 className="description_label">{props.text}: {props.info}</h3>
       </>
    );
}