## :computer: Projeto

A proposta deste projeto foi desenvolver uma aplicação simples com um CRUD completo que consumisse uma API REST, que no caso foi desenvolvida em outro projeto, [MyFirstRESTAPI](https://github.com/caiohscruz/MyFirstRESTAPI), e que lidasse com autenticação de cliente com JWT. Primeiro desenvolvi este projeto sem a autenticação e gravei um vídeo que pode ser assistido clicando [aqui](https://youtu.be/RVVYuSteLdo), depois acabei implementado a questão da autenticação, com a API recusando solicitações caso o usuário não possua um token válido, e o vídeo demonstrando como ficou o projeto pode ser visto clicando aqui. Realizei o deploy do projeto na Heroku, [clique aqui](https://myfirstrestapiconsumer.herokuapp.com/) para acessá-lo.

Atenção, caso teste minha API REST diretamente com algo como o Postman ou pela aplicação mesmo que desenvolvi para consumi-la e acuse indisponibilidade do serviço, será necessário acessar o [site da API](https://my-first--rest-api.herokuapp.com/) para que ele saia da hibernação. Projetos ociosos são suspensos pelo Heroku, mas basta acessar a página para que sejam postos em atividade novamente.

## :satellite: De onde?

Adquiri um curso de NodeJS na Udemy,  [Formação NodeJS](https://www.udemy.com/course/formacao-nodejs/), que me pareceu ser bem completinho, esta aplicação foi proposta como quarto projeto, junto da [MyFirstRESTAPI](https://github.com/caiohscruz/MyFirstRESTAPI). Nas aulas, a aplicação se limitou a uma única página, sem nenhuma estilização, e todas as operações em um único arquivo, pensando em consultas futuras e reutilização, resolvi fazer de forma mais separadinha e organizada.

## :rocket:Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- JavaScript
- NodeJS
- EJS
- dotenv
- Express
