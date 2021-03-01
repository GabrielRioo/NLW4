# NLW4 - Node JS

### Instalando Ferramentas:
* https://www.notion.so/Instala-o-das-ferramentas-1c09af201b4b49c5bf1678842a96d9ab#203186fa0ee2484aa2b7686d9ca78548

### Instalando Dependencias:
* Console Visual Studio Code:
   * `yarn init -y` - cria o `package` com as informaçoes que o yarn possui, nao pede confirmação de nome, etc.
* `yarn add express` - microframework
   * `node_modules` - todas as bibliotecas baixadas
   * `yarn.lock`
   * dependencias no `package.json` 
* `yarn add @types/express -D` - tipagem do express
* `yarn add typescript -D` - Converter o codigo para JavaScript
* `yarn add ts-node-dev -D` - Converter o codigo para TypeScript
   * Ao instalar, ir no `package.json` e adicionar:
   ```
   "scripts": {                                            // "dev" - qualquer nome
    "dev": "ts-node-dev --transpile-only --ignore-watch node_modules src/server.ts"    // -transpile-only - chegagem de erro nas tipagens 
  },                                                      // ts-node-dev vai rodar o arquivo: rc/server.ts
   ```
* `yarn tsc --init` - cria o arquivo `tsconfig..json` - configurações do Type Script
* `yarn dev` - rodar o programa
* **INSTALANDO TYPE ORM** https://typeorm.io/#/
   * `yarn add typeorm reflect-metadata`   
* **INSTALANDO SQLITE** (banco em memoria, nao usar para produção)
   * `yarn add sqlite3` 
* **ORM CONFIG** (onde vao esta o banco de dados, as entidades, migrations...)
   * criar o arquivo `ormconfig.json`
      * Informar: `"type": "sqlite"` e `"database: ./src/database/database.sqlite"` 
   * `yarn typeorm migration:create -n CreateUsers` - migration
   * `yarn typeorm migration:run` - roda a migration apos defifinr as colunas do BD
   * `yarn typeorm migration:revert` - rollback da **ULTIMA** migration 

### Tipos de Testes Automatizados:
* Testes Unitarios: determinadas funcionalidades da aplicação
   * TDD: Desenvolver orientado a testes
   * Nunca fazer testes de acesso a banco de dados, ou api externas
* Testes de Integração: funcionalidade completa da aplicação
* Teste Ponta a Ponta (End 2 End): toda ação doo usuario em uma aplicação(mais para front-end)
#### Instalação:
* `yarn add jest @types/jest -D`
* `yarn jest --init`
* `yarn add ts-jest -D`
* `yarn add supertest @types/supertest -D`

### Enviar Email:
* [NodeMailer](https://nodemailer.com/about/)
* [Ethereal](https://ethereal.email/)
* `yarn add nodemailer`
* `yarn add @types/nodemailer -D`

### Customização (templates):
[Handlebars](https://handlebarsjs.com/)
* `yarn add handlebars`
