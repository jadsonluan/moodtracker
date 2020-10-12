const DEFAULT_PORT = 5000

const config = {
  mongoDB: { uri: `${process.env.MONGO_DB_URI}`},
  host: { port: process.env.PORT || DEFAULT_PORT },
  localMode: true
}

module.exports = config