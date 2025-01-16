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
    <div className="container d-flex flex-column justify-content-center align-items-center">
      <div className="card shadow-lg p-4">
        <div className="col">
          <div className="d-flex justify-content-center">
            <h2>Login</h2>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                placeholder="Digite seu email"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Senha
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                placeholder="Digite sua senha"
                required
              />
            </div>

            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-primary">
                Entrar
              </button>
            </div>
          </form>
        </div>
        <div className="row mt-3">
            <div className="col">
              <Link
                href="/auth/forgot-password"
                className={styles.helperLinkText}
              >
                Esqueci minha senha
              </Link>
            </div>
            <div className="col">
              <Link href="/auth/register" className={styles.helperLinkText}>
                Não tem cadastro?
              </Link>
            </div>
          </div>
      </div>
    </div>
  );
};
