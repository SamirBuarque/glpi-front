"use client";

import React, {useEffect, useState} from "react";
import styles from "@/app/styles/layout/header.module.css";
import Link from "next/link";
import axios from 'axios'
import CreateTicketModal from "../tickets/CreateTicketModal";

const Header = () => {
  const [username, setUsername] = useState("")
  const [isModalOpen, setIsModalOpen] = useState(false)

  const getUsername = async () => {
    try {
      const response = await axios.get("http://localhost:5140/v1/identity/manage/info",
        {
          withCredentials: true
        }
      );
      console.log("buscando o nome do usuario")
      console.log(response)
      setUsername(response.data.email)
    } catch(error) {
      console.log("Erro ao buscar o nome do usuario.", error)
    }
  }

  useEffect(() => {
    getUsername();
  }, [])

  const handleSaveTicket = async (ticketData: {title: string, department: string, description: string, status: Number}) => {
    try{
      console.log("Ticket salvo.", ticketData)
      const response2 = await axios.post("http://localhost:5140/v1/tickets", 
        ticketData,
        { withCredentials: true }
      )
      console.log("Enviando ticket para o backend", response2)
    } catch(error) {
      console.log("Erro ao salvar o ticket", error)
    }
  }

  return (
    <header className={styles.header}>
      <div className="logo-header">
        <h1>
          <Link href={"/"} className={styles.logo}>
            IT Ticketing System
          </Link>
        </h1>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <button
              className={styles.adicionar_chamado_button}
              onClick={() => {
                setIsModalOpen(true)
              }}
            >
              Adicionar chamado
            </button>
          </li>
          <li>
            <button className={styles.other_buttons}>
              <img
                src="/images/night-mode.png"
                alt="light/dark mode"
                width={30}
                height={30}
              />
            </button>
          </li>
          <li>
            <Link href={'/settings'}>
            <img
                src="/images/settings.png"
                alt="settings"
                width={30}
                height={30}
              />
            </Link>
          </li>
          <li className={styles.user_icon_set}>
            <Link href={'/user'}>
            <img
                src="/images/user.png"
                alt="user profile"
                width={30}
                height={30}
              />
            </Link>
            <span className={styles.username_icon}>
              {username}
            </span>
          </li>
        </ul>
      </nav>
      <CreateTicketModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveTicket}
      />
    </header>
  );
};
export default Header;
