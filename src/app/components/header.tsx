import React from "react";
import styles from "@/app/styles/header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="logo-header">
        <h1 className={styles.logo}>IT Ticketing System</h1>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <button className={styles.adicionar_chamado_button}>
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
            <button className={styles.other_buttons}>
              <img
                src="/images/settings.png"
                alt="settings"
                width={30}
                height={30}
              />
            </button>
          </li>
          <li className={styles.user_icon_set}>
            <button className={styles.other_buttons}>
              <img
                src="/images/user.png"
                alt="user profile"
                width={30}
                height={30}
              />
            </button>
            <span className={styles.username_icon}>Samir Buarque</span>
          </li>
        </ul>
      </nav>
    </header>
  );
}
