'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import styles from "@/app/styles/register/register.module.css";

export const FormRegister = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // o que essa função faz

    // verifica algum campo vazio no form
    if (!email || !password || !confirmPassword) {
      setError("Por favor preencha todos os campos");
      return;
    }

    if (password != confirmPassword) {
      setError("As senhas não coincidem");
      return;
    }

    setError("");

    try {
      const response = await axios.post(
        "http://localhost:5140/v1/identity/register",
        {
          email,
          password,
        }
      );
      console.log(response);
      setSuccess("Registrado com sucesso!");

      setTimeout(() => {
        router.push("/auth/login");
      }, 2000);
    } catch (err: any) {
      if (err.response) {
        setError(err.response.data.message || "erro ao registrar");
      } else if (err.request) {
        setError("Erro de rede. Tente novamente");
      } else {
        setError("Erro desconhecido");
      }
      console.log("Erro ao enviar os dados", err);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.registerForm}>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email:</label>
          <input
            className={styles.input}
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu email"
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Senha:</label>
          <input
            className={styles.input}
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Digite sua senha"
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Confirme sua senha:</label>
          <input
            className={styles.input}
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirme sua senha"
            required
          />

          <button type="submit" className={styles.loginButton}>
            Entrar
          </button>
        </div>
      </form>
      {error && <p className={styles.error}>{error}</p>}
      {success && <p className={styles.success}>{success}</p>}
    </div>
  );
};
