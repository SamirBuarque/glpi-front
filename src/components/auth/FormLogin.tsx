"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import styles from "@/app/styles/login/login.module.css";
import Link from "next/link";

export const FormLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Por favor preencha todos os campos");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5140/v1/identity/login?useCookies=true",
        {
          email,
          password,
        },
        { withCredentials: true }
      );
      console.log(response);
      router.push("/tickets/dashboard");
    } catch (err: any) {
      if (err.response) {
        setError("Erro ao efetuar login");
      } else if (err.request) {
        setError("Erro de rede. Tente novamente");
      } else {
        setError(`Erro desconhecido: ${err}`);
      }
      console.log("erro ao enviar os dados.", err);
      console.log(`Email: ${email} Senha: ${password}`);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.loginForm}>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="email">
            Email:
          </label>
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
          <label className={styles.label} htmlFor="password">
            Senha:
          </label>
          <input
            className={styles.input}
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Digite sua senha"
            required
          />
          {error && <p className={styles.error}>{error}</p>}
        </div>
        <div className={styles.buttonWrapper}>
          <button type="submit" className={styles.loginButton}>
            Entrar
          </button>
        </div>
        <div className={styles.helperLinksWrapper}>
          <Link href="/auth/forgot-password" className={styles.helperLinkText}>
            Esqueci minha senha
          </Link>
          <Link href="/auth/register" className={styles.helperLinkText}>
            Não tem cadastro?
          </Link>
        </div>
      </form>
    </div>
  );
};
