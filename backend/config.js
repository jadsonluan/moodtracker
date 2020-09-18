const DEFAULT_PORT = 3000

const config = {
  mongoDB: { uri: `${process.env.MONGO_DB_URI}`},
  host: { port: process.env.PORT || DEFAULT_PORT }
}

module.exports = config