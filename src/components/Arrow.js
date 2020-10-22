import React from 'react';

export default function Arrow(props){
    return(
        <div className="arrow" onClick={props.countFn}>
            <i class="fas fa-arrow-circle-right arrow_right"></i>
        </div>
    );
}