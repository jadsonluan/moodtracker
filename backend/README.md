# Usando a API

Inicialmente, você precisa clonar esse repositório e instalar as dependências do backend.

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