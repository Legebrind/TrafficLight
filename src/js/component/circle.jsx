import React from "react";

const Circle = (props)=>{

    return(
    props.isActive ? <div className={`rounded-circle mx-auto mt-5 col-4 alturaCirculo active ${props.setCircleColor}`}></div> :
    <div className={`rounded-circle mx-auto mt-5 col-4 alturaCirculo ${props.setCircleColor}`}></div>)
    
}

export default Circle;