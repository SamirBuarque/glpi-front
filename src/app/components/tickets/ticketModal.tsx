import React, { useState } from "react";
import styles from "@/app/styles/ticketModal.module.css";
import { ticketProps } from "./tickets/ticket";

interface TicketModalProps {
  onClose: () => void;
  onSubmit: (ticket: ticketProps) => void;
}

const TicketModal: React.FC<TicketModalProps> = ({ onClose, onSubmit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newTicket = {
      id: Math.floor(Math.random() * 1000),
      title,
      description,
      status,
    };
    onSubmit(newTicket);
    onClose();
  };
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2>Cadastrar Ticket</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Titulo:
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <label>
            Descrição:
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
          <label>
            Status:
            <input
              type="text"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            />
          </label>
          <button className={styles.button} type="submit">Salvar Ticket</button>
          <button className={styles.button} type="button" onClick={onClose}>
            Cancelar
          </button>
        </form>
      </div>
    </div>
  );
};
export default TicketModal;
