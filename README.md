# Quasar App (spa-quasar-vue)

# Especificações Técnicas
- **Front-end:**
  - Framework JS: [Vue.js](https://vuejs.org/)
  - Framework de UI: [Quasar](https://quasar.dev/)
- **API:** JSON Server

# Siga os passos abaixo para rodar a aplicação:

## Install JSON Server
```bash
yarn add -g json-server
# or
npm install -g json-server
```

## Crie um arquivo db.json com alguns dados em uma pasta separada.
```bash
{
  "students": [
    {
      "name": "José da Silva",
      "cpf": "123.456.789-09",
      "email": "josedasilva@gmail.com",
      "id": 1
    }
  ]
}
```

## Iniciar servidor JSON
```bash
json-server --watch db.json
```

## Instalação das dependêcias
```bash
yarn
# or
npm install
```

### Inicie a aplicação no modo de desenvolvimento
```bash
quasar dev
```
