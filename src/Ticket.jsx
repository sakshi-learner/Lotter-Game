import TicketNum from "./TicketNum";
import "./Ticket.css";
function Ticket({ticket}){

    return(
        <>
        <p>Your Ticket</p>
        <div className="Ticket">
          {ticket.map((num,idx)=>(
            <TicketNum num={num} key={idx}/>
          ))}
        </div>
        </>
    );
}

export default Ticket;