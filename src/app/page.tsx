import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Vai pedir o login do usuário, caso não esteja logado</h1>
      </div>
    </div>
  );
}
