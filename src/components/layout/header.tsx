"use client";

import React from "react";
import styles from "@/app/styles/layout/header.module.css";
import Link from "next/link";

interface HeaderProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = () => {
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
                console.log("adicionar chamado");
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
            <span className={styles.username_icon}>Samir Buarque</span>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
