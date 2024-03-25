import { Button } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react"
export default function Stopper(props) {
    const [time, setTime] = useState(0);
    const [inter, setInter]  = useState();
    useEffect(() => {
        const i = setInterval(() => {
            function novekvo(elozo) {
                if(elozo === props.meddig) {
                    //alert(inter);
                    clearInterval(i);
                    return 0;
                }
                return elozo + 1;
            }
            setTime(novekvo) 
        },1000)
        setInter(i);
        return () => {clearInterval(i)}
    }, [setTime, setInter])
    const restart = useCallback(Restart, [inter]);
    function Restart() {
        clearInterval(inter);
        setTime(0);
    } 
    return (
        <div className="flex flex-col items-center ">
        {time}
        <button className="bg-red-200 rounded-lg p-5 hover:bg-slate-300" onClick={restart}>Restart</button>
        <Button variant="outlined" color="error">Error</Button>
        </div>
    );
}