const server = require('./server')
const config = require('./server/config')
const mongodb = require('mongodb').MongoClient
const routes = require('./app/Http/routes')

server.listen(config.port, () => {
  mongodb.connect(config.db.uri, (err, db) => {
    if (err) {
      console.log('Erro ao tentar conectar ao banco de dados')
      process.exit(1)
    }

    console.log(
      '%s v%s ready to accept connections on port %s in %s environment.',
      server.name,
      config.version,
      config.port,
      config.env
    )

    routes({ db, server })
  })
})
