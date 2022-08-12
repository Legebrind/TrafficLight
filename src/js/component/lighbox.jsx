import React, { useEffect, useState } from "react";
import Circle from "./circle.jsx";


const LightBox = () =>{
    const[activeRed,setActiveRed] = useState(false);
    const[activeYellow,setActiveYellow] = useState(false);
    const[activeGreen,setActiveGreen] = useState(false);
    const[activePurple,setActivePurple] = useState(false);
    const[showPurple,setShowPurple] = useState(false);

    
    
    
    return(
        <div className="lightBox rounded-pill pb-5 container">
           <div className="row" onClick={()=>{setActiveRed(!activeRed);setActiveYellow(false);setActiveGreen(false),setActivePurple(false)}}>
            <Circle setCircleColor="bg-danger" isActive={activeRed}/>
           </div>
           <div className="row" onClick={()=>{setActiveRed(false);setActiveYellow(!activeYellow);setActiveGreen(false);setActivePurple(false)}}>
            <Circle setCircleColor="bg-warning" isActive={activeYellow}/>
           </div>
           <div className="row" onClick={()=>{setActiveRed(false);setActiveYellow(false);setActiveGreen(!activeGreen); setActivePurple(false)}}>
            <Circle setCircleColor="bg-success" isActive={activeGreen}/>
           </div>
           <div className="row" id="purple" onClick={()=>{setActiveRed(false);setActiveYellow(false);setActiveGreen(false);setActivePurple(!activePurple)}}>
            <Circle setCircleColor="purple" isActive={activePurple}/>
           </div>           
        </div> 
    )
}

export default LightBox;