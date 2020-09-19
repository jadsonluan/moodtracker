# Mood Tracker

Aplicação baseada em Mood Tracking, uma técnica de psicologia positiva, para registrar seu humor durante o dia.

## Funcionalidades

A aplicação possui três principais componentes:

- Formulário para registrar seu humor contendo uma lista de tags (humor), um botão para criar mais tags e um campo de texto para inserir o motivo que causou aquele humor;

- Histórico dos últimos registros de seu humor. Exibe o humor associado, uma descrição e quando foi registrado;

- Visualizações utilizando os registros a longo prazo (semanas, meses ou anos). Essa seção possuirá opções de visualizações (em forma de calendário, grid, etc).

Ao adicionar um novo humor (tag) é possível escolher seu nome e cor.

### Protótipo de tela :rocket:

Você pode visualizar uma prévia [aqui](https://jadsonluan.github.io/moodtracker/frontend/prototipo.html).

Por mais que já esteja estilizado não quer dizer que esse será o design final. É apenas um representação para dar uma ideia do que será construído.

## Usando a API

Inicialmente, você precisa clonar esse repositório e instalar as dependências do backend.

```bash
git clone https://github.com/jadsonluan/moodtracker
cd backend/
npm install
```

Após isso, configure um arquivo `.env` usando o `.env.example` como template. Por fim, inicie a API.

```bash
npm run dev
```

### Endpoints

Há dois principais recursos na API: moods e records. Esses são, respectivamente, as tags que representam um sentimento e os registros de humor.

Os endpoints **atualmente** implementados são:

| Method | Endpoint | Descrição                                  |
|--------|----------|--------------------------------------------|
| GET    | /moods   | Lista todos os humores (tags) cadastrados. |
| POST   | /moods   | Cria um novo humor (tag)                   |
| GET    | /records | Lista todos os registros                   |
| POST   | /records | Cria um novo registro                      |

### Formato dos objetos

#### Requests

POST /moods

```json
{ "name": "triste", "color": "#0000ff" }
```

POST /records`

```json
{ 
  "description": "comeram meu bolo",
  "mood": "5f66192ee117e4eff7e4201b"
}
```

#### Responses

GET /moods

```json
[
  {
    "_id": "5f66192ee117e4eff7e4201b",
    "name": "triste",
    "color": "#0000ff",
    "__v": 0
  }
]
```

GET /records

```json
[
  {
    "_id": "5f6614a3b39a23e8a6a01bf6",
    "description": "comeram meu bolo",
    "mood": {
      "_id": "5f66192ee117e4eff7e4201b",
      "name": "triste",
      "color": "#0000ff",
      "__v": 0
    },
    "createdAt": "2020-09-19T14:24:35.128Z",
    "__v": 0
  }
]
```
