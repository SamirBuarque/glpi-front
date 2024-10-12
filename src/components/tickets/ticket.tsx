import React from "react";
import styles from "@/app/styles/ticket.module.css";

export interface ticketProps {
  id: number;
  title: string;
  description: string;
  status: string;
}

const Ticket: React.FC<ticketProps> = ({ id, title, description, status }) => {
  return (
    <div className={styles.ticket}>
      <h2>{id}</h2>
      <h2>{title}</h2>
      <p>{description}</p>
      <span>{status}</span>
    </div>
  );
};
export default Ticket;
