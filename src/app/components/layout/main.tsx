"use client"

import React, { useState, useEffect } from "react";
import { ticketListProps } from "@/app/components/tickets/ticketList";
import TicketList from "@/app/components/tickets/ticketList";
import TicketModal from "@/app/components/tickets/ticketModal";
import { ticketProps } from "@/app/components/tickets/ticket";

interface MainProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Main: React.FC<MainProps> = ({showModal, setShowModal}) => {
  const [tickets, setTickets] = useState<ticketProps[]>([]);

  const handleAddTicket = (newTicket: ticketProps) => {
    setTickets([...tickets, newTicket]);
  };

  useEffect(() => {
    console.log(`estado de showModal: ${showModal}`);

    return () => {
      console.log('Main component unmounted');
    };
  }, [showModal]);

  return (
    <div>
      <h1>Todos os chamados</h1>
      {showModal ? (
        <TicketModal
        onClose={() => setShowModal(false)}
        onSubmit={handleAddTicket}
      />
      ): null}
      <TicketList tickets={tickets}/>
    </div>
  );
};
export default Main;
