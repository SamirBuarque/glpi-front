import React from "react";
import axios from "axios";
import styles from "@/app/styles/tickets/ticket.module.css";
import { TicketList } from "@/components/tickets/TicketList";
import { cookies } from "next/headers";

const DashboardPage: React.FC = async () => {
  let tickets = [];
  // capturando a porra do cookie
  const cookieStore = cookies();
  const cookieHeader = cookieStore.get(
    ".AspNetCore.Identity.Application"
  )?.value;
  try {
    const response = await axios.get(
      "http://localhost:5140/v1/tickets?pageNumber=1&pageSize=25",
      {
        withCredentials: true,
        headers: {
          Cookie: `.AspNetCore.Identity.Application=${cookieHeader}`,
        }
      }
    );
    tickets = response.data.data;
  } catch (error) {
    console.log("erro ao realizar o GET.", error);
  }

  return (
    <div className={styles.container}>
      <div className={styles.topContent}>
        <h2>Todos os chamados</h2>
        <h2>Input de busca</h2>
      </div>

      <div className={styles.ticketLabels}>
        <span>ID</span>
        <span>Título</span>
        <span>Autor</span>
        <span>Criado em</span>
        <span>Departamento</span>
      </div>

      <TicketList initialTickets={tickets} />
    </div>
  );
};

export default DashboardPage;
