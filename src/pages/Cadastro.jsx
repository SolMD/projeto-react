import { useState, useContext } from "react";
import Navbar from "../components/Navbar";
import { UserContext } from "../context/UserContext";

export default function Cadastro() {
  const { usuarios, setUsuarios } =
    useContext(UserContext);

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  function cadastrar(e) {
    e.preventDefault();

    if (!nome.trim()) {
      alert("Nome obrigatório");
      return;
    }

    if (!email.includes("@")) {
      alert("Email inválido");
      return;
    }

    const novoUsuario = {
      id: Date.now(),
      nome,
      email
    };

    setUsuarios([...usuarios, novoUsuario]);

    setNome("");
    setEmail("");
  }

  return (
    <>
      <Navbar />

      <form onSubmit={cadastrar}>
        <h2>Cadastro</h2>

        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit">
          Cadastrar
        </button>
      </form>
    </>
  );
}