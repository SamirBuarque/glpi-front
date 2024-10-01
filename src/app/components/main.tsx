import React from "react";
import { ticketListProps } from "./ticketList";
import TicketList from "./ticketList";

const Main: React.FC = () => {
  const lista: ticketListProps = {
    tickets: [
      {
        id: 1,
        title: "Chamado 1",
        description: "Descrição do chamado 1",
        status: "Em aberto",
      },
      {
        id: 2,
        title: "Chamado 2",
        description: "Descrição do chamado 2",
        status: "Fechado",
      },
      {
        id: 3,
        title: "Chamado 3",
        description: "Descrição do chamado 3",
        status: "Concluído",
      },
      {
        id: 4,
        title: "Chamado 4",
        description: "Descrição do chamado 4",
        status: "Concluído",
      },
    ],
  };

  return (
    <div>
      <h1>Todos os chamados</h1>
      <TicketList tickets={lista.tickets} />
    </div>
  );
};
export default Main;
