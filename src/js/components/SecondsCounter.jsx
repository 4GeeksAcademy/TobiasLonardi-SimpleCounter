import React, {useEffect, useState} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
export const SecondsCounter = () =>{
const [counter,setCounter] = useState(0);
const [stopCounter, setStopCounter] = useState(false)

    
    useEffect(() =>{
        if(!stopCounter){
            const intervalID = setInterval(()=>{console.log("tobias")
                setCounter(counter + 1)
        
            },1000)
            return () => clearInterval(intervalID)

        }
        

    }, [counter, stopCounter])
    return(
        <>

            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="d-flex border border-dark bg-dark text-white">
                            <h1 className="p-3 border border-white"><FontAwesomeIcon icon={faClock} /></h1>

                            <h1 className="p-3 border border-white">{Math.floor((counter /100000) % 10)}</h1>
                            <h1 className="p-3 border border-white">{Math.floor((counter /10000) % 10)}</h1>
                            <h1 className="p-3 border border-white">{Math.floor((counter /1000) % 10)}</h1>
                            <h1 className="p-3 border border-white">{Math.floor((counter /100) % 10)}</h1>
                            <h1 className="p-3 border border-white">{Math.floor((counter / 10) % 10)}</h1>
                            <h1 className="p-3 border border-white">{((counter /1) % 10)}</h1>

                        </div>
                        <button onClick={() => setStopCounter(!stopCounter)}>{!stopCounter ? "Stop" : "Start"}</button>

                    </div>

                </div>

            </div>
        </>


    )
}
 