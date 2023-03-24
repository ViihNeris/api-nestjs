# API-NestJS 🌐🔴
Este projeto consiste em ser uma <b>API CRUD REST</b> com testes end-to-end usando técnicas modernas de desenvolvimento da web. NestJs é uma estrutura NodeJS, a qual está em rápido crescimento: Auxilia a criação de aplicativos de back-end escaláveis e sustentáveis.

Inclui a <b>Bookmarks API</b> desenvolvida do zero, utilizando <i>NestJS</i>, <i>Docker</i>, <i>Postgres</i>, <i>PassportJS</i>, <i>Prisma</i>, <i>Pactum</i> e <i>Dotenv</i>.

## O Projeto 
Neste projeto foi utilizado o framework Open Source INSOMNIA (para desenvolvimento/teste da API Client).

## USERS 👥
### POST 🟢 – Signup | Cadastrando um usuário 👤
Para cadastrar um usuário, é necessário preencher os campos "email" e "password". Neste cadastro é gerado um token que expira dentro de 15 minutos.

![image](https://user-images.githubusercontent.com/93789218/227270407-4a8588ca-7702-417c-8192-cfb7f3b211bf.png)

![image](https://user-images.githubusercontent.com/93789218/227270457-085e1edd-bde0-4c79-a502-22ab5e2e1a4b.png)

### POST 🟢 – Signin
Com as credenciais geradas, é possível realizar o login. Ao logar, um novo token será gerado, também com a duração de 15 minutos.

![image](https://user-images.githubusercontent.com/93789218/227271060-7b3b7c5d-9654-415a-84fb-b8e4d4d00cdf.png)

###### Todos os tokens servem para fins de Autorização, que você verá mais a frente.

Caso você erre alguma credencial, uma response <b>```403```</b> será retornada:

![image](https://user-images.githubusercontent.com/93789218/227315486-3588e2be-2f2a-4c52-93b1-0b0187d186f5.png)


### GET 🔵 – Obtendo usuários por ID
A partir da criação do usuário (ou login do mesmo) um token será gerado e a partir dele será possível obter as informações do usuário.

![image](https://user-images.githubusercontent.com/93789218/227272634-cf4502d5-01b9-492f-bb92-43b7b71fcf0d.png)

![image](https://user-images.githubusercontent.com/93789218/227272807-ecb3d94e-f921-4976-a37c-f791246addc3.png)

Caso você não tenha um token ou utilize um inválido (```não só aqui, mas em qualquer Request```), a response <b>```401```</b> será retornada:

![image](https://user-images.githubusercontent.com/93789218/227317718-08822bd9-5dd3-4a3f-9281-c3256ed5bb6e.png)

### PATCH 🟠 – UPDATE | Atualizando o usuário
Caso seja necessário, você pode atualizar o email do usuário ou até mesmo atribuir um "firstName" e "lastName" para o mesmo (não inseridos nos passos anteriores).

![image](https://user-images.githubusercontent.com/93789218/227275243-c1bc621d-3960-48df-8866-071b6c26a093.png)

![image](https://user-images.githubusercontent.com/93789218/227273760-ed802a0e-177f-415a-8052-722b6e8fb393.png)

![image](https://user-images.githubusercontent.com/93789218/227273789-47ff5f0f-b159-4606-9bb2-85be0ff0a989.png)

###### Neste exemplo, o usuário de ID 28 (gerado nos passos anteriores) teve seu email, firstName e lastName modificados.

> **Note** <br> Como a solução sabia qual ID eu queria editar? <br> R: Novamente, o token foi o responsável! Ao tê-lo no Header, ele consegue identificar a qual usuário você se refere, tendo em vista que cada registro tem um token único. <br>
Por isso, cada vez que manipularmos algum registro (tanto em Users quanto em Bookmarks, que você verá a seguir) tenha em mente que <b>há um TOKEN por trás.</b>

## BOOKMARKS 📑
Para conseguir registrar um novo Bookmark, você deve vinculá-lo a um usuário. Utilizaremos o criado anteriormente (ID 28).

### POST 🟢 – Cadastrando e vinculando um Bookmark 

![image](https://user-images.githubusercontent.com/93789218/227324631-71be56d3-7348-4c1e-8b58-1b10b772a84e.png)

![image](https://user-images.githubusercontent.com/93789218/227324840-a9acb71d-5d8e-4cbd-8eb6-94a62392e0a4.png)

### GET 🔵 – Obtendo o Bookmark por ID

Através da rota ```/bookmarks/{id}``` é possível visualizar o bookmark criado:

![image](https://user-images.githubusercontent.com/93789218/227325909-4dc3abe9-8820-4483-b039-7e53a98d69e6.png)

![image](https://user-images.githubusercontent.com/93789218/227326115-e9ff349b-56d5-462f-a8fa-d24581c26f6a.png)

Caso o ID não exista, nada é retornado:

![image](https://user-images.githubusercontent.com/93789218/227326202-19496e7b-989d-429d-a239-34253ac4a18d.png)

### PATCH 🟠 – UPDATE | Atualizando o Bookmark 

Caso desejado, é possível modificar os campos ```title```, ```description``` e ```link```. Vamos modificar o bookmark de ID 5 vinculado ao user de ID 28 (criado nos passos anteriores):

![image](https://user-images.githubusercontent.com/93789218/227337979-bf5fb04a-e1fd-4e4b-94bc-3a86a90ccc6c.png)

![image](https://user-images.githubusercontent.com/93789218/227338474-6e342a4c-9dfc-42ca-a169-359f13888c89.png)

### DELETE 🔴 – Excluindo um Bookmark

Iremos deletar o bookmark de ```ID 4``` (também vinculado ao user ```ID 28```).

![image](https://user-images.githubusercontent.com/93789218/227340003-58d29bb1-3d33-49d6-8e3c-9030a86ce28b.png)

Após o êxito da operação, o response <b>```204```</b> será retornado:

![image](https://user-images.githubusercontent.com/93789218/227340123-e6a44c5f-d0d5-4d02-8312-bc9085ddef04.png)

![image](https://user-images.githubusercontent.com/93789218/227340206-1df9655e-90cb-499c-9312-fb5349159e91.png)

## Testes Unitários 👁‍🗨

Testes unitários, assim como qualquer teste automatizado, não servem principalmente para verificar se uma função específica está funcionando, mas sim para garantir que sua aplicação continue funcionando após alguma alteração em sua base de código.

Em nossa solução, todos os testes (desenvolvidos juntamente com <b><i>PactumJS</i></b>) obtiveram êxito em sua execução:

![image](https://user-images.githubusercontent.com/93789218/227583270-5d1ceebc-a86e-43a3-859c-05833f0acdbe.png)


## Visualização de Dados 🎲

### Docker 🟦
Neste projeto foram utilizados 2 Databases: 1 para "Produção" e 1 para Testes.

![image](https://user-images.githubusercontent.com/93789218/227579601-22c92b8a-6996-4304-9cc5-98799b16b328.png)

### Prisma Studio🟪
<b>Prisma Studio</b> é o produto principal da tecnologia. Trata-se de uma interface do usuário feita para visualizar e editar os dados na database.

Como notamos nos tópicos anteriores, este projeto contém 2 Entidades: ```Users``` e ```Bookmarks```. O <b>Prisma Studio</b> consegue nos trazer uma representação visual disso, tanto no ambiente de testes quanto de produção:

- Dados de Produção
  - Users 👥
   ![image](https://user-images.githubusercontent.com/93789218/227579983-23317e11-0b7c-4595-a44c-d65206834a6b.png)
  - Bookmarks 📑
  ![image](https://user-images.githubusercontent.com/93789218/227580483-7d95f6d8-ef45-4fac-aa55-81910ceff470.png)
  
  <br>
  
  > **Note**<br> Note como o ```ID 28``` está referenciado em ```Bookmarks```. Perceba também como foi indicado que há 1 Bookmark atrelado ao registro do ID 28 em```Users```. Tudo está conectado 😉

<br>

- Dados de Testes
  - Users 👥
  ![image](https://user-images.githubusercontent.com/93789218/227581533-8b2c861a-2789-425d-aafc-5cc20e2345b7.png)

  - Bookmarks 📑
  ![image](https://user-images.githubusercontent.com/93789218/227581543-e77bfe55-0293-496b-b965-4eef8815665b.png)

```diff
- Utilize "npx dotenv -e .env.test -- prisma studio" para manipular o ambiente de testes.
```

## Desenvolvido em:

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>

<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

### Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## License

Nest is [MIT licensed](LICENSE).

## References

- Repositório guia para este projeto: https://github.com/vladwulf/nestjs-api-tutorial
- Testes Unitários: https://dayvsonlima.medium.com/entenda-de-uma-vez-por-todas-o-que-são-testes-unitários-para-que-servem-e-como-fazê-los-2a6f645bab3
- Prisma: https://blog.rocketseat.com.br/prisma-uma-das-melhores-coisa-que-ja-aconteceu-no-ecossistema/#:~:text=Prisma%20é%20uma%20ferramenta%20open,js%20e%20TypeScript

## Obrigada! ✅
Acompanhe mais projetos meus em https://github.com/ViihNeris 😉💜👩🏻‍💻
