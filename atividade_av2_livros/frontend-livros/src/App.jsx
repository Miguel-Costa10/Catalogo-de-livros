import { useState } from "react";

function App() {
  const [livros, setLivros] = useState([]);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState("");

  async function buscarLivros() {
    setCarregando(true);
    setErro("");

    try {
      const resposta = await fetch("/api/livros");

      if (!resposta.ok) {
        throw new Error("Falha na resposta da API");
      }

      const dados = await resposta.json();
      setLivros(dados.livros);
    } catch {
      setLivros([]);
      setErro("Não foi possível buscar os livros. Confira se a API Flask está em execução.");
    } finally {
      setCarregando(false);
    }
  }

  return (
    <main className="container">
      <header>
        <p className="eyebrow">BIBLIOTECA DIGITAL</p>
        <h1>Catálogo de Livros</h1>
        <p className="intro">Consulte os livros disponíveis na nossa coleção.</p>
      </header>

      <button onClick={buscarLivros} disabled={carregando}>
        {carregando ? "Buscando..." : "Buscar Livros"}
      </button>

      {carregando && <p className="status">Carregando livros...</p>}
      {erro && <p className="erro" role="alert">{erro}</p>}

      <section className="lista-livros" aria-live="polite">
        {livros.map((livro) => (
          <article className="livro" key={livro.id}>
            <span className="id">ID: {livro.id}</span>
            <h2>{livro.titulo}</h2>
            <p><strong>Autor:</strong> {livro.autor}</p>
            <p><strong>Ano:</strong> {livro.ano}</p>
          </article>
        ))}
      </section>
    </main>
  );
}

export default App;
