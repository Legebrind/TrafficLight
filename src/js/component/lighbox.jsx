import React, { useEffect, useState } from "react";
import Circle from "./circle.jsx";


const LightBox = () =>{
    const[activeRed,setActiveRed] = useState(false);
    const[activeYellow,setActiveYellow] = useState(false);
    const[activeGreen,setActiveGreen] = useState(false);
    const[activePurple,setActivePurple] = useState(false);
    const[showPurple,setShowPurple] = useState(false);
    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);

    useEffect(()=>{
        if(showPurple){ 
            document.getElementById("purple").classList.remove("d-none");

        }else{
            document.getElementById("purple").classList.add("d-none");
        }
    },[showPurple])

    useEffect(() => {
        let interval;
        if (running) {
          interval = setInterval(() => {
            setTime((pokemon) => pokemon + 1);
          }, 1000);
        } else if (!running) {
          clearInterval(interval);
          setActiveRed(false);
          setActiveYellow(false);
          setActiveGreen(false)
        }
        return () => clearInterval(interval);
      }, [running]);

    useEffect(()=>{
        if(time==1){setActiveRed(true)};
        if(time==4){setActiveRed(false);setActiveGreen(true)};
        if(time==7){setActiveGreen(false);setActiveYellow(true)};
        if(time==10){setActiveYellow(false);if(!showPurple){setActiveRed(true); setTime(0)}else{setActivePurple(true)}};
        if(time==13){setActivePurple(false);setActiveRed(true)}
    },[time])
    
    return(
        <>
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
            <button className="btn btn-primary btn-lg m-4" onClick={()=>{
                    setShowPurple(!showPurple);
            }}>Show/Hide</button>
            <button className="btn btn-primary btn-lg m-4" onClick={()=>{
                    setRunning(!running);
            }}>Start/stop Interval</button>
        </>
    )
}

export default LightBox;