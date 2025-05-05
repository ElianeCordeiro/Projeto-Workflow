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

