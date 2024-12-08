"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

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
    <div>
      {tickets.length > 0 ? (
        tickets.map((ticket) => (
          <div key={ticket.id}>
            <h3>{ticket.title}</h3>
            <p>{ticket.description}</p>
          </div>
        ))
      ) : (
        <p>Nenhum ticket encontrado</p>
      )}
    </div>
  );
};

export default DashboardPage;
