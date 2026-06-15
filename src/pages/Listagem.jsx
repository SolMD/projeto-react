import { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { UserContext } from "../context/UserContext";
import { api } from "../services/api";

export default function Listagem() {
  const { usuarios } = useContext(UserContext);

  const [apiUsers, setApiUsers] = useState([]);

  useEffect(() => {
    async function carregar() {
      const response =
        await api.get("/users");

      setApiUsers(response.data);
    }

    carregar();
  }, []);

  return (
    <>
      <Navbar />

      <div className="container">
        <h2>Usuários Cadastrados</h2>

        {usuarios.map((user) => (
          <div key={user.id}>
            <p>{user.nome}</p>
            <p>{user.email}</p>
          </div>
        ))}

        <h2>Usuários da API</h2>

        {apiUsers.map((user) => (
          <div key={user.id}>
            <p>{user.name}</p>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
    </>
  );
}