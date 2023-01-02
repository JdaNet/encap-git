import React from "react";
import {useEffect, useRef, useState} from "react";
import '../css/CountDown.css'



const formatTime = (time) => {
    //let minutes = Math.floor(time / 60)
    let seconds = Math.floor(time)

    //if(minutes <=10) minutes = '0'+  minutes;
    if(seconds <= 10) seconds = ''+ seconds;
    return  seconds

}


export default function CountDown({seconds}){
    const [countdown, setCountdown] = useState(seconds)
    const timerId = useRef()

    useEffect(() =>{
        timerId.current = setInterval(()=> {
            setCountdown(prev => prev-1)
        }, 1000)

        return() => clearInterval(timerId.current)
    },[])

    useEffect(() => {
        if(countdown <= 0){
            clearInterval(timerId.current)
            alert("El tiempo ha terminado, Vuelve a intentarlo")
            

        }
    }, [countdown])

    
    return(
           <div className="estilos">
               <h2 class="icon-clock-o">Esta ventana se cerrará en {formatTime(countdown)}segundos</h2>
           </div>

    )


}