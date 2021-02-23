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
