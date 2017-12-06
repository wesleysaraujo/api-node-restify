const config = require('./config')
const cors = require('./cors')
const restify = require('restify')
const server = restify.createServer({
  name: config.name,
  version: config.version
})

server.pre(cors.preflight)
server.use(cors.actual)
server.use(restify.plugins.bodyParser())
server.use(restify.plugins.jsonBodyParser({ mapParams: true }))
server.use(restify.plugins.acceptParser(server.acceptable))
server.use(restify.plugins.queryParser({ mapParams: true }))
server.use(restify.plugins.fullResponse())

module.exports = server
