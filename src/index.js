const server = require('./server')
const config = require('./server/config')
const mongodb = require('mongodb').MongoClient

server.listen(config.port, () => {
  mongodb.connect(config.db.uri, (err, db) => {
    if (err) {
      console.log('Erro ao tentar conectar ao banco de dados')
      process.exit(1)
    }

    console.log(
      '%s v%s ready to accept connections on port %s in %s environment.',
      server.name,
      config.port,
      config.env
    )

    require('./app/Http/routes')({ db, server })
  })
})
