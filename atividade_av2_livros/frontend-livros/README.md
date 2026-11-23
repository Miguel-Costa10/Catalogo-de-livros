# Frontend — Catálogo de Livros

Interface React + Vite da Revisão 2. Os livros são buscados na API Flask somente
quando o usuário clica em **Buscar Livros**.

## Requisitos
- Node.js e npm instalados.
- API Flask da pasta `../api-livros` em execução na porta 5000.

## Instalação e execução
Abra um segundo terminal nesta pasta e execute:

```bash
npm install
npm run dev
```

Abra o endereço mostrado pelo Vite (normalmente `http://localhost:5173`).

## Integração
O frontend chama `/api/livros`. O proxy configurado em `vite.config.js`
encaminha a chamada para `http://127.0.0.1:5000/livros`.

Mantenha os dois servidores em execução: Flask (porta 5000) e Vite (porta 5173).
