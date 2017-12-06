const routes = (server) => {
  server.get('/categorias', (req, res, next) => {
    res.send('Olá mundo')
    next()
  })

  server.post('categorias', (req, res, next) => {
    const { name } = req.params

    res.send(name)

    next()
  })

  server.put('/categorias', (req, res, next) => {
    res.send()

    next()
  })

  server.get('/', (req, res, next) => {
    res.send('Hello meu mundo negro com sol amarelo sem vida...')
    next()
  })
}

module.exports = routes
