import React, { useState } from "react";
import styles from "@/app/styles/tickets/CreateTicketModal.module.css";

interface CreateTicketModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (ticketData: {
    title: string;
    department: string;
    description: string;
    status: Number;
  }) => void;
}

const CreateTicketModal: React.FC<CreateTicketModalProps> = ({
  isOpen,
  onClose,
  onSave,
}) => {
  const [title, setTitle] = useState("");
  const [department, setDepartment] = useState("");
  const [description, setDescription] = useState("");
  const [statusName, setStatusName] = useState("");
  const [status, setStatus] = useState(Number);
  const [isStatusDropdownOpen, setIsStatusDropdownOpen] = useState(false);

  //const statusOptions = ["Aberto", "Em andamento", "Fechado"];

  const statusOptions = {
    0: "Aberto",
    1: "Em andamento",
    2: "Fechado"
  }

  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !department || !description) return;
    onSave({ title, department, description, status });
    onClose();
    setTitle("");
    setDepartment("");
    setDescription("");
    setStatusName("")
    setStatus(-1)
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <h2>Criar novo ticket</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="status">Status</label>
            <div className={styles.dropdownWrapper}>
              <input
                type="text"
                id="status"
                value={statusName}
                placeholder="Selecione o status do chamado"
                onClick={() => {setIsStatusDropdownOpen(!isStatusDropdownOpen)}}
                readOnly
                className={styles.dropdownInput}
              />
              {isStatusDropdownOpen && (
                <div className={styles.dropdownMenu}>
                  {Object.entries(statusOptions).map(([key, option]) => (
                    <div
                      key={key}
                      className={styles.dropdownItem}
                      onClick={() => {
                        setStatusName(option)
                        setIsStatusDropdownOpen(false)
                        setStatus(Number(key))
                        console.log("Status code: ", status)
                      }}
                    >
                      {option}
                    </div>
                  ))}                  
                </div>
              )}
            </div>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="title">Título</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="department">Departamento</label>
            <input
              type="text"
              id="department"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="description">Descrição</label>
            <textarea
              id="department"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <button type="submit" className={styles.saveButton}>
            Salvar
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateTicketModal;
