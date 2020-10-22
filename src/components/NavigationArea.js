import React from 'react';


export default function NavigationArea(props){
    return(

       <div className={"navigation-area " + props.text}>
            <a href="/" className="navigation-area_link">{props.text}</a>
       </div>
    );
}