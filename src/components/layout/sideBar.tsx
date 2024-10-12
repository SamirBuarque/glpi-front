"use client";

import styles from "@/app/styles/layout/sideBar.module.css";
import { useRouter } from "next/navigation";

export default function sideBar() {
  const router = useRouter();

  function handleNavigation(path: string) {
    router.push(path);
  }

  return (
    <div className={styles.sidebar}>
      <h2 className={styles.sidebar_title}>Prioridade da equipe</h2>
      <ul>
        <li>
          <button className={styles.button}>Todos os chamados <span>2</span></button>
        </li>
        <li>
          <button className={styles.button}>Associados à mim <span>1</span></button>
        </li>
        <li>
          <button className={styles.button}>Chamados em aberto <span>1</span></button>
        </li>
      </ul>
    </div>
  );
}
