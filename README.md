# API  

API simples de filmes desenvolvida com Node.js

## Workflow Escolhido: 
### GitHub Flow

O GitHub Flow foi o modelo escolhido pois, levando em consideração a baixa complexidade da API e por ser um software mais simples, ele atenderia as necessidades do projeto, como a criação do primeiro endpoint e a adição da nova feature a partir da main.


## Como rodar o projeto?

```bash
# Instale as dependências
npm install

#Inicie o servidor
npm start
```
## Endpoints 
GET: http://localhost:3000/api/movies  
POST: http://localhost:3000/api/movies com JSON no body:
```bash
{
  "title": "Interstellar",
  "date": "2014-11-07"
}
```
## Como rodar o projeto com Vagrantfile?

```bash
#Em um terminal, navegue até a pasta root do projeto e inicialize o vagrant
vagrant up

#Conecte-se a vm1 via ssh
vagrant ssh vm1

#Navegue até a pasta do projeto
cd /home/vagrant/app

#Instale as dependências e suba a aplicação
npm install
npm start

#Em outro terminal, ainda na pasta do projeto, conecte-se a vm2
vagrant ssh vm2

#Teste a rota GET
curl http://192.168.56.10:3000/api/movies
```
- Nota: A instalação do curl e a sincronização das pastas serão realizadas no momento do provisionamento da infraestrutura com vagrant up
