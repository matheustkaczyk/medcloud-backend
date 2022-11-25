# API de criação, autenticação e gerenciamento de administradores e pacientes.

### Projeto de uma API em Node.js que contempla criação e manipulação de administradores e pacientes.

---

## Visão Geral

##### Este desafio técnico tinha como propósito a criação de uma API de um sistema de gerenciamento de pacientes de uma clínica.

##### Bibliotecas:

- [Express.js](https://expressjs.com/) v^4.18.2 - Framework Node;
- [TypeScript](https://www.npmjs.com/package/typescript) v^4.3.5 - Superset para Javascript;
- [dotenv](https://www.npmjs.com/package/dotenv) v^16.0.1  - Pacote para configuração de variáveis de ambiente;
- [prisma](https://www.prisma.io) v^4.6.1 - Ferramente para trabalhar com banco de dados relacionais mais fácilmente;

## **Sumário**

- [Pré Requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Contexto e Regras de Negócio](#contexto-e-regras-de-negócio)
- [Rotas | Endpoints](#rotas-|-endpoints)
- [Sobre o autor](#sobre-o-autor)

---

## **Pré requisitos**

Para rodar esse projeto é necessário ter instalado em sua máquina o runtime Node.js.

---

## **Instalação**

### Utilização local

1. Você pode baixar o projeto em sua máquina utilizando o comando:

   **`git@github.com:matheustkaczyk/medcloud-backend.git`**

2. Entre na pasta do projeto digitando o comando **`cd medcloud-backend`**

3. Instale as dependências com o comando *`npm install`*

4. Na raiz do projeto, crie um arquivo chamado .env para configurar as variáveis de ambiente necessárias:
    ```
      DATABASE_URL="URL DO DB"

      JWT_SECRET="SEGREDO JWT"
    ```

5. Para rodar as migration e criar a tabela no bancos de dados, rode o comando:
*`npx prisma migrate dev --name init`*

6. Para iniciar o projeto, rode o comando:
*`npm run dev`*

## Contexto

Esse projeto possui um front-end feito: *`https://github.com/matheustkaczyk/medcloud-frontend`*
O contexto dessa API é prover toda a lógica necessária para o frontend de um sistema de gerênciamento de pacientes.

## Rotas | Endpoints
### POST - Criar administrador (/signup)
Endpoint para efetuar a criação do administrador.
```json
{
  "firstName": "Luis",
  "lastName": "Ribeiro",
  "email": "luis@teste.com",
  "password": "senha"
}
```

### POST - Autenticar administrador (/signin)
Endpoint para efetuar a autenticação do administrador.
```json
{
  "email": "luis@teste.com",
  "password": "senha"
}
```

### POST - Criar paciente (/patient)
Endpoint para efetuar a criação de um paciente (TOKEN NECESSÁRIO)
```json
 {
	"firstName": "Matheus",
	"lastName": "Tkaczyk Ribeiro",
	"email": "email@email.com",
	"password": "senha",
	"address": "Rua tal"
}
```

### PUT - Atualização do paciente (/pacient/:id)
Endpoint para efetuar a atualização de um paciente com base em seu id. (TOKEN NECESSÁRIO)
```json
{
	"firstName": "Matheus",
	"lastName": "Tkaczyk Ribeiro",
	"email": "email@email.com",
	"password": "senha",
	"address": "Rua tal"
}
```

### GET - Pega todos os pacientes (/patient)
Endpoint para pegar todas as informações de pacientes (TOKEN NECESSÁRIO)

### GET - Pega um paciente pelo seu ID (/patient/:id)
Endpoint para buscar um paciente pelo seu ID (TOKEN NECESSÁRIO)

### DELETE - Deleta um paciente pelo seu ID (/patient/:id)
Endpoint para deletar um patient pelo seu ID (TOKEN NECESSÁRIO)

---

## **Sobre o autor**

Obrigado por ter lido até aqui!

Eu me chamo Matheus, e sou desenvolvedor web fullstack. Comecei meus estudos no ano de 2020 e estou me apaixonando cada dia que passa, através dos estudos, por tecnologia e desenvolvimento. Esse projeto e esse README foram desenvolvidos como um desafio técnico. Eu empenhei muito carinho na construção de cada linha.

[Você pode olhar mais dos meus repositórios aqui](https://github.com/matheustkaczyk)

[Ou se conectar comigo no linkedin!](https://www.linkedin.com/in/matheustkaczykribeiro/)
