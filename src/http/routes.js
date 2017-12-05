
const routes = (server) => {
  server.get('/', (req, res, next) => {
    res.send('Hello meu mundo negro com sol amarelo sem vida...')
    next()
  })

  server.get('/categorias', (req, res, next) => {
    res.send([1, 'Bermudas'])
    next()
  })
  server.post('/categorias', (req, res, next) => {
    const { name } = req.params

    res.send(name)

    next()
  })
  server.put('/categorias', (req, res, next) => {
    res.send()

    next()
  })
//   server.delete('/categorias', (req, res, next) => {
//     res.send()

//     next()
//   })
}

module.exports = routes
