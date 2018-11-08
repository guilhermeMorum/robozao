# Robozão
Gabriel Sales, Guilherme Morum, Murilo que não gosta de gente, Samuel e Rogério

## Que que ta rolando
Robozão é uma instância do HubotNatural, que é a mesma coisa que o Hubot (desenvolvido pela galera do GitHub) só que usando processamento de linguagem natural.
O bot usa o RocketChat adapter pra se conectar ao Rocket e conversar com a galerinha.

## Como usar
#### RocketChat Serve
Para subir o Rocket só dar um docker-compose up nas paradas dentro da pasta docker, ou executar o script start.sh.
Depois disso, se for o primeiro acesso, é preciso criar a conta de administrador e a que o bot vai usar.
#### Robozão
Depois que o Rocket estiver de pé, só rodar o init.sh na root do projeto que ele faz o trabalho pra você.

## Personalização
As instruções que devem ser processadas com linguagem natural devem ser incluídos no diretório data, dentro de algum arquivo .yml.
As demais instruções podem ser colocadas no diretório sccripts, dentro de algum arquivo .coffee;

## Links Úteis
#### RocketChat
- https://github.com/RocketChat/hubot-natural
- https://github.com/RocketChat/hubot-rocketchat-boilerplate
- https://github.com/RocketChat/hubot-rocketchat
- https://github.com/RocketChat/Rocket.Chat.Ops
#### Hubot
- https://hubot.github.com/docs/
- https://github.com/hubotio/hubot/blob/master/docs/scripting.md#making-http-calls
#### Heartbot
- https://github.com/digitalocean/heartbot#interactions
#### Coffeescript
- https://coffeescript.org/
