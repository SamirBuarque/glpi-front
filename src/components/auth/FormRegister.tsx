"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

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
    <div className="container d-flex flex-column justify-content-center align-items-center">
      <div className="row card shadow-lg p-4">
        <div className="col">
          <div className="d-flex justify-content-center">
          <h2>Crie sua conta</h2>
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

            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Confirme a senha
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="form-control"
                placeholder="Digite novamente sua senha"
                required
              />
            </div>
            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-primary">
                Registrar
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="col mt-3">
        {error && (
          <div className="alert alert-warning" role="alert">
            Erro ao registrar {error}
          </div>
        )}
        {success && (
          <div className="alert alert-success" role="alert">
            Registrado com sucesso
          </div>
        )}
      </div>
    </div>
  );
};
