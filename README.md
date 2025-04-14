Imobiliária - API e Front-end
Este projeto faz parte do material didático da disciplina **Desenvolvimento Full Stack Básico** e tem como objetivo demonstrar a criação de uma aplicação completa utilizando **Python (Flask)** no back-end, **HTML/CSS/JS** no front-end e conteinerização com **Docker** e **Docker Compose**.

Como Executar com Docker
> Certifique-se de ter o Docker e Docker Compose instalados.

1. Clone o repositório:
git clone <URL-do-repositório>
cd nome-do-projeto
Execute a aplicação:
docker-compose up --build
Acesse no navegador:
API (Swagger): http://localhost:5000
Front-end: http://localhost:8080

Como Parar a Aplicação
Para encerrar os containers: CTRL + C ou docker-compose down
Sobre o Projeto
A aplicação simula uma plataforma de venda de imóveis, com foco em:
Imóveis Novos da Construtora Cury
Funcionalidades:
Cadastro, listagem, atualização e exclusão de apartamentos
Interface amigável para usuários via Front-end

API REST documentada com Swagger
Tecnologias Utilizadas
Python 3.11
Flask, Flask-CORS, Flask-OpenAPI3
SQLAlchemy, SQLite
Pydantic
HTML, CSS, JS
API ViaCEP, Docker e Docker Compose

Testando Sem Docker (modo desenvolvimento)
Use um ambiente virtual:
python -m venv env
source env/bin/activate  # Linux/macOS
.\env\Scripts\activate   # Windows
pip install -r requirements.txt
flask run --host 0.0.0.0 --port 5000

Considerações Finais
O MVP atual foi desenvolvido com base em uma ideia de negócio real e servirá de base para melhorias e integrações futuras.

Cenário de implementação do MVP_2025 – Desenvolvimento Back-End Avançado
Eu resolvi usar o meu MVP do primeiro trimestre (Sprint). 
A API Externa que utilizei foi a ViaCEP - Consulte CEPs de todo o Brasil no endereço https://viacep.com.br/.

A finalidade é facilitar o cadastro de um Apartamento no Banco de Dados através do Front-end uma vez que as pessoas que farão isso não necessitam de conhecimento específico para fazê-lo se fosse no Back-end.

Para facilitar a utilização do Front-end no cadastro de Apartamento segue abaixo uma relação de empreendimentos com seus respectivos nomes do condomínio, endereço – CEP, disposição e preços.

1)	Condominio Heitor dos Prazeres, Rua General Luís Mendes de Morais, S/N (CEP 20220-260), Dois quartos, 420000
2)	Condominio Epicentro, Av. Professor Pereira Reis, 42, (CEP 20220-800) Dois quartos c/suíte, 520000 
3)	Residencial Quinta do Bispo, Rua do Bispo, 83, (CEP 20261-902) Dois quartos c/suíte, 490000
4)	Orla Mauá, Avenida Venezuela 194 Gamboa Rio de Janeiro (CEP 20220-572), Dois quartos c/suíte vaga, 710000
5)	Mirante da Guanabara, Rua Equador, 222, Santo Cristo RJ (CEP 20220410), Sala Qto, 360000
6)	Urban Downtown Niterói, Travessa Luiz Paulino, São Lourenço Niterói (CEP 24030330), Sala 2 Qtos Suíte Vaga, 580000
Observação importante – Por se tratar de um projeto acadêmico os Apartamentos cadastrados não possuem nenhum vínculo com a realidade do mercado da Construtora Cury.
Estrutura dos diretórios
