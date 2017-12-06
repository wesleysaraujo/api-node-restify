
const routes = (server) => {
  server.get('/categorias', (req, res, next) => {
    res.send(
      [
        {
          id: 1,
          name: 'Bermudas'
        },
        {
          id: 2,
          name: 'Calças'
        },
        {
          id: 3,
          name: 'Camisetas'
        }
      ]
    )
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
