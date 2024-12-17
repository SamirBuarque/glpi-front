"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import styles from "@/app/styles/tickets/ticket.module.css";
import formatDate from "@/utils/formatDate";

interface Ticket {
  id: string;
  title: string;
  userId: string;
  createdAt: string;
  departmentToExecute: string;
}

interface TicketListProps {
  initialTickets: Ticket[];
}

export const TicketList: React.FC<TicketListProps> = ({ initialTickets }) => {
  return (
    <div>
      {initialTickets.length > 0 ? (
        initialTickets.map((initialTickets) => (
          <div key={initialTickets.id} className={styles.ticket}>
            <Link
              href={`/tickets/details/${initialTickets.id}`}
              className={styles.ticket_ID}
            >
              {initialTickets.id}
            </Link>
            <span className={styles.ticket_title}>{initialTickets.title}</span>
            <span className={styles.ticket_userID}>{initialTickets.userId}</span>
            <span className={styles.ticket_createdAt}>
              {formatDate(initialTickets.createdAt)}
            </span>
            <span className={styles.ticket_departament}>
              {initialTickets.departmentToExecute}
            </span>
          </div>
        ))
      ) : (
        <p>Nenhum ticket encontrado</p>
      )}
    </div>
  );
};
