# API de Livros — Flask

API da Revisão 1. Disponibiliza três livros em JSON pela rota `GET /livros`.

## Requisitos
- Python 3.10 ou superior.

## Instalação e execução (Windows)
Abra o terminal nesta pasta e execute:

```bash
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
python app.py
```

A API ficará disponível em `http://127.0.0.1:5000/livros`.

## Teste
Abra o endereço acima no navegador. A resposta deve conter a chave `livros`
com três registros, cada um com `id`, `titulo`, `autor` e `ano`.
