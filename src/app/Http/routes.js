const CategoriesController = require('./Controllers/CategoriesController')

const routes = (ctx) => {
  const Route = ctx.server

  CategoriesController(ctx)

  Route.get('/', (req, res, next) => {
    res.send('Hello meu mundo negro com sol amarelo sem vida...')
    next()
  })
}

module.exports = routes
