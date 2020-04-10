Angular
============
Como implementar uma aplicação Angular
------------
O **Angular** **CLI** facilita a criação de um projeto com Angular, e já nos traz uma aplicação estruturada com as melhores práticas determinas para o Angular.

Lembrando que na introdução eu falei que devemos ter o Node e o Npm instalado, depois que tivermos realizado a instalação do Node e do NPM devemos executar o comando abaixo para instalar o Angular CLI.

_npm_ _install_ _-g_ _@angular_/_cli_

Se durante a instalação você receber o erro permission denied, access **/usr/local/lib/node_modules/@angular/cli**, você deve executar o comando como sudo, ou dar as permissões necessárias para a execução do NPM.


_sudo_ _npm_ _install_ _-g_ _@angular_/_cli_

Depois do Angular CLI instalado vamos agora cirar um novo projeto, para isso basta executar o comando abaixo.

_ng_ _new_ _app_-_site_


Depois de criar o projeto vamos executar o comando abaixo para entrar no diretório da nossa aplicação.

_cd_ _app-site_

E depois vamos executar o comando abaixo para executar a nossa aplicação.

_ng_ _serve_ _--open_

E então devemos ter o resultado como mostra a imagem abaixo, nessa imagem podemos ver que o **Angular CLI** já criou a estrutura do nosso projeto com os arquivos necessários.