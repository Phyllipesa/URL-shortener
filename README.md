# URL-shortener

Este é um projeto de um serviço de encurtamento de URLs simples que permite converter URLs longas em URLs curtas e redirecionar URLs curtas de volta para suas URLs originais.


## Funcionalidades

Este serviço oferece duas principais funcionalidades:

1. **Encurtar URLs**: Você pode enviar uma URL longa para o serviço, que irá gerar uma sequência de 5 letras como URL encurtada.

2. **Redirecionar URLs Curtas**: Ao acessar uma URL curta gerada pelo serviço, você será redirecionado para a URL longa original associada a essa sequência.

## Projeto

![Print do Projeto](https://i.imgur.com/rBD09VS.png)

## Executar Localmente

Clone o projeto 

```bash
  git@github.com:Phyllipesa/URL-shortener.git
```

Entre no diretório

```bash
  cd encurtador-de-urls
```

Instale as dependências

```bash
  npm install
```



Abra o projeto usando Vscode ou Intellij


- Configure o arquivo /app/backend/.env
  exemplo:
```bash
  DOMAIN=http://localhost:3000
```


## Para iniciar o serviço.

```bash
  npm start
```

Para encurtar uma URL, faça uma solicitação POST para `/` com o seguinte formato JSON:

```bash
  {
    "url": "URL_LONGA_AQUI"
  }
```

Redirecionar para uma URL Original

Para redirecionar para a URL original, acesse a URL encurtada gerada pelo serviço, por exemplo:

```bash
  http://localhost:3000/Mhs0G
```


## Testes

Os testes são feitos com Mocha, Sinon e Chai e incluem casos de teste para as funcionalidades de encurtar URLs e redirecionar URLs curtas.

```bash
  npm test
```

## Cobertura dos testes

```bash
  npm run test:coverage
```

## Tecnologias

 - JavaScript
 - Node.js
 - Express.js
 - Sequelize (com SQLite3)
 - dotenv
 - Nodemon
 - Mocha
 - Sinon
 - Chai

## Autor

- [@phyllipesa](https://github.com/phyllipesa) - Desenvolvimento do projeto
