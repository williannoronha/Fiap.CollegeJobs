Obter posts via API
============
Como usar fetch para obter uma lista de posts do blog
------------



A API **Fetch** fornece uma interface JavaScript para accessar e manipular partes do pipeline HTTP, tais como os pedidos e respostas. Ela também fornece o método global fetch() que fornece uma maneira fácil e lógica para buscar recursos de forma assíncrona através da rede.

Este tipo de funcionalidade era obtida anteriormente utilizando XMLHttpRequest. Fetch fornece uma alternativa melhor que pode ser facilmente utilizada por outras tecnologias como Service Workers. Fetch também provê um lugar lógico único para definir outros conceitos relacionados ao protocolo HTTP como CORS e extensões ao HTTP.

Note que a especificação fetch() difere de jQuery.ajax(), principalmente, tendo em mente duas situações:

- A Promise retornada do fetch() não rejeitará o status do erro HTTP, mesmo que a resposta seja um HTTP 404 ou 500. Em vez disso, ela irá resolver normalmente (com o status ok definido como falso), e só irá rejeitar se houver falha na rede ou se algo impedir a requisição de ser completada.
- Por padrão, o fetch não enviará nem receberá cookies do servidor, resultando em solicitações não autenticadas se o site depende do uso de uma sessão de usuário (para enviar cookies, a opção credentials do  parâmetro init deve ser definida).

Situação do suporte por navegadores
Os suportes para Fetch ainda estão em uma fase bastante precoce, mas começa a ter progresso. Se tornou um padrão no Firefox 39 e Chrome 42 até as versões mais atuais.

Caso tenha interesse no uso da ferramenta, há também uma Fetch Polyfill disponivel que recria as funcionalidade para outros navegadores que ainda não o suporta. Fique ciente que está em estado experimental e ainda não há uma versão completa.