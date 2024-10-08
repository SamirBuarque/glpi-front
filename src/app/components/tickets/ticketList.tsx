import React from "react";
import Ticket from "@/app/components/tickets/ticket";
import { ticketProps } from "@/app/components/tickets/ticket";

export interface ticketListProps {
  tickets: ticketProps[];
}

const TicketList: React.FC<ticketListProps> = ({ tickets }) => {
  return (
    <div>
      {tickets.map((ticket, index) => (
        <Ticket key={index} {...ticket} />
      ))}
    </div>
  );
};
export default TicketList;
