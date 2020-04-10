React
============
Como implementar uma aplicação React
------------

### Configurando o Ambiente de Desenvolvimento React

Para começarmos o desenvolvimento vamos digitar o comando **npx create-react-app react-todo-bulma**, que irá criar uma pasta para nós com o nome de react-todo-bulma e dentro dela, uma estrutura com o necessário para o início do desenvolvimento com React.

Após finalizar toda a instalação, vamos testar. Digite o seguinte comando.

_cd react-todo-bulma_

_npm start_

E agora, se tudo deu certo, você deve ter algo parecido com isto no seu navegador.

### Criando o Servidor com Express e mLab

Nossa API ficará dentro de uma pasta _/server_ e dentro dela ficarão os arquivos responsáveis pela criação do servidor, assim como sua lógica e a conexão com o banco de dados.

Bora lá.

1. Estruturando a pasta

A primeira coisa a fazer é criar a estrutura de pastas digitando o comando abaixo na raiz do projeto.

_mkdir server_

_cd server_

_mkdir config controllers models routes_

- **config**: Arquivos relacionados a configuração do banco de dados.
- **controllers**: Definição das controllers que serão passadas para as rotas.
- **models**: Modelos do banco.
- **routes**: Definição dos endpoints da API.
