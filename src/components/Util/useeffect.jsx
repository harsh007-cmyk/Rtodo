import React,{useState,useEffect} from "react";


function Use(){
    const [varb,setVarb]=useState('');
    useEffect(() => {
      console.log("Enter useEffect");
        
    
    }, [varb])
    function handle() {
        console.log(varb);
        setVarb(varb+1); 
    }
    console.log("Enter use");
    return (
        
        <div>
            {varb}
            <button onClick={handle}>fasdf</button>{console.log("Enter return",varb)}</div>
    )
}
export default Use; 