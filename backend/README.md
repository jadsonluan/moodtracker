# Usando a API

Primeiro você precisa clonar esse repositório e instalar as dependências do backend.

```bash
git clone https://github.com/jadsonluan/moodtracker
cd backend/
npm install
```

Inicialmente a API está configurada para rodar em modo local (armazenamento em memória invés de usar um banco de dados), assim facilita o uso pois não precisa configurar nenhuma banco de dados.

Se você quiser testar usando um banco de dados, modifique a variável `localMode` em backend/config.js para `true`. Se o fizer, será necessário configurar o banco de dados em um arquivo .env, para isso use o `.env.example` como template.

Por fim, rode a API em modo dev.
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