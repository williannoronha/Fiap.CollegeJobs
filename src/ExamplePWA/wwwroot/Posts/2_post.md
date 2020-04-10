Usando Indexed DB
============
Como salvar lista de posts utilizando indexed DB
------------

IndexedDB é uma forma de armazenar dados no navegador do usuário. 

Com ele você pode criar aplicações web com possibilidade de fazer query sem necessidade de conexão, suas aplicações podem funcionar tanto online quanto offline. 

O IndexedDB encoraja o uso do seguinte padrão:

1. Abrir um banco de dados.
2. Criar um ObjectStore ao atualizar o banco. 
3. Iniciar uma transação e e faz um request para fazer alguma operação no banco, como adicionar ou obter dados.
4. Esperar a operação ser completada ouvindo algum evento DOM.
5. Fazer algo com o resultado da query (que pode ser obtida pelo objeto request).

Pelo fato  da especificação ainda estar evoluindo, as implementações do IndexedDB tem prefixos de navegadores. 

Os navegadores podem ter implementações diferentes da API IndexedDB até a especificação ser consolidada. 

Mas uma vez que tudo chegar a um consenso, os navegadores tirarão seus prefixos. 

Atualmente, algumas implementações removeram o prefixo: Internet Explorer 10, Firefox 16, Chrome 24. Quando eles usam prefixo, navegadores baseados no Gecko usam o prefixo moz, enquanto os navegadores baseados no WebKit usam o prefixo _webkit_.
