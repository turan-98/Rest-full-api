## Teste Samuel santana


## Porque desenvolvi com node js e axios?
Porque estou fazendo um cursinho online de node então tenho um pouco mais de familiaridade com ele, e axios porque ele facilita muito a vida. A linguagem que mais tenho familiaridade é o Javascript por isso fiz tudo com ele 


## Processo de desenvolvimento 
- Primeiro passo foi criar a api e o método get
- Depois o método Post 
- Testar a api com o postman 
- Depois hora de organizar o código, estava tudo no index.js então criei a pasta config com o routes js 
- Depois importar o axios no front e começar a desenvolver os métodos de acesso

## Como rodar o projeto 
- Instale as instalar as dependencias do packjson 
- rodar o comando npm start no terminal
- instalar a extensão live server
- abrir o index html com o live server
- Assim que a page carregar os métodos getMaterials(), addNewMaterials() e updateNewUser() serão executados

## Dificuldades
Enquanto isso está tudo muito manual para inserir um novo dado na api, então tentei fazer isso de uma forma mais dinâmica colocando inputs no index e um button para cadastrar, eu pegava o value do input e parava o submit com o stoppropagation, mais algo ali estava se perdendo que acabou dando erro no método e o axios não entendia a requisição.

Outra dificuldade foi realizar o get por parametro /rawMaterials?user=Fulano
o mais próximo que consegui de chegar perto dessa busca foi usando essa formatação no método put (`${url}/2`), mas no get o axios não entendia o comando que estava passando.


