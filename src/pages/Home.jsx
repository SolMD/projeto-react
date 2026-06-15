import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="container">
        <h1>Sistema de Cadastro</h1>

        <p>
          Projeto React utilizando rotas,
          Context API e API REST.
        </p>
      </div>
    </>
  );
}