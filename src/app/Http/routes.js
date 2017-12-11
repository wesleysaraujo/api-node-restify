const categories = require('./endpoints/categories')

const routes = (ctx) => {
  const Route = ctx.server

  categories(ctx)

  Route.get('/', (req, res, next) => {
    res.send('Hello meu mundo negro com sol amarelo sem vida...')
    next()
  })
}

module.exports = routes
