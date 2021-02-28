# NLW #4
A Next Level Week é uma iniciativa da Rocketseat para ampliar os conhecimentos dos desenvolvedores, de modo a melhorar a própria comunidade de programadores.  
A edição #4 tratou uma API para uma pesquisa de Net Promoter Score, na qual foi ensinado alguns conceitos em Nodejs, uso do yarn, banco de dados sqlite3 usando o typeorm, além de testes de integração com o uso do jest e supertest e houve o uso do TypeScript também.

### Como rodar a aplicação
Pré-requisitos: Ter na máquina `git`, `nodejs` e `yarn` ou `npm`  
Escolha um diretório para baixar o projeto  
Caso queira usar `npm` ao invés de `yarn`, só trocar o comando `yarn` por `npm`
```
git clone https://github.com/Denis-Lima/NLW4.git
cd NLW4
yarn install
yarn dev
```

### Uso e visualização
Para fazer o uso de forma simples, pode ser usado o [Postman](https://www.postman.com/downloads/) ou [Insomnia](https://insomnia.rest/download/core/?) para realizar as requisições  
Para fácil visualização dos dados dentro do banco, utilize o [Beekeeper-studio](https://www.beekeeperstudio.io/get).

#### Beekeeper Studio
* Para fazer a conexão selecione a opção "SQLite"
* procure pelo arquivo que está no diretório `src/database/database.sqlite`
* pressione a opção "Connect"

#### Insomnia
* Para realizar requisições pelo Insomnia, cliquei na opção "+" para criar uma nova requisição  
* Escolha o tipo (GET ou POST)  
* Coloque a URL `http://localhost:3333/`
* Escolha uma rota e seu método (Todas as rotas estão no arquivo `src/routes.ts`)