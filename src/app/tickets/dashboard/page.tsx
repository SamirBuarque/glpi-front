"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from '@/app/styles/tickets/ticket.module.css'
import formatDate from '@/utils/formatDate'

const DashboardPage: React.FC = () => {
  const [tickets, setTickets] = useState<any[]>([]);

  const renderTickets = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5140/v1/tickets?pageNumber=1&pageSize=25",
        {
          withCredentials: true,
        }
      );
      console.log("tentando exibir a response:");
      console.log(response);
      setTickets(response.data.data);
    } catch (error) {
      console.log("erro ao realizar o GET.", error);
    }
  };

  useEffect(() => {
    renderTickets();
  }, []);

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
      
      {tickets.length > 0 ? (
        tickets.map((ticket) => (
          <div key={ticket.id} className={styles.ticket}>
            <span className={styles.ticket_ID}>{ticket.id}</span>
            <span className={styles.ticket_title}>{ticket.title}</span>
            <span className={styles.ticket_userID}>{ticket.userId}</span>
            <span className={styles.ticket_createdAt}>{formatDate(ticket.createdAt)}</span>
            <span className={styles.ticket_departament}>{ticket.departmentToExecute}</span>
          </div>
        ))
      ) : (
        <p>Nenhum ticket encontrado</p>
      )}
    </div>
  );
};

export default DashboardPage;
