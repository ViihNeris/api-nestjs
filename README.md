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

###### Esses tokens servem para fins de Autorização, que você verá mais a frente.

### GET 🔵 – Obtendo usuários por ID
A partir da criação do usuário (ou login do mesmo) um token será gerado e a partir dele será possível obter as informações do usuário.

![image](https://user-images.githubusercontent.com/93789218/227272634-cf4502d5-01b9-492f-bb92-43b7b71fcf0d.png)

![image](https://user-images.githubusercontent.com/93789218/227272807-ecb3d94e-f921-4976-a37c-f791246addc3.png)

### PATCH 🟠 – UPDATE | Atualizando o usuário
Caso seja necessário, você pode atualizar o email do usuário ou até mesmo atribuir um "firstName" e "lastName" para o mesmo (não inseridos nos passos anteriores).

![image](https://user-images.githubusercontent.com/93789218/227275243-c1bc621d-3960-48df-8866-071b6c26a093.png)

![image](https://user-images.githubusercontent.com/93789218/227273760-ed802a0e-177f-415a-8052-722b6e8fb393.png)

![image](https://user-images.githubusercontent.com/93789218/227273789-47ff5f0f-b159-4606-9bb2-85be0ff0a989.png)

###### Neste exemplo, o usuário de ID 28 (gerado nos passos anteriores) teve seu email, firstName e lastName modificados.

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
