import { useState } from "react";
import "./Lottery.css";
import { genNum, sum } from "./helper";
import Ticket from "./Ticket";
function Lottery({n=3, winSum=15}){

    let [ticket, setTicket] = useState(genNum(n));
    let isWin = sum(ticket) === winSum;

    let getTicket = ()=>{
        setTicket(genNum(n));
    };

    return(
        <>
        <div>
            <h1>  Lottery Game !</h1>
            <div className="ticket">
            <Ticket ticket={ticket}/>
            </div>
            <button className="btn" onClick={getTicket}>Get Ticket</button>
            <h3>{isWin && "Yeh Congratulations, you Won!"}</h3>
        </div>
        </>
    )
}

export default Lottery;