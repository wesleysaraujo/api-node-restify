module.exports = (ctx) => {
  const db = ctx.db
  const Route = ctx.server
  const ObjectId = require('mongodb').ObjectId

  // Collection Categories of MongoDB
  const categoriesCollection = db.collection('categories')

  Route.get('/categorias', (req, res, next) => {
    let limit = parseInt(req.query.limit, 10) || 10
    let skip = parseInt(req.query.skip, 10) || 0
    let query = req.query || {}

    delete query.skip
    delete query.limit

    categoriesCollection.find(query).skip(skip).limit(limit).toArray()
      .then(docs => res.send(200, docs))
      .catch(err => res.send(500, err))

    next()
  })

  Route.post('categorias', (req, res, next) => {
    const { name, description } = req.params

    const data = Object.assign({}, { name, description }, {
      name: name,
      description: description,
      created: new Date(),
      updated: new Date()
    })

    categoriesCollection.insertOne(data)
      .then(doc => res.send(200, doc.ops[0]))
      .catch(err => res.send(500, err))

    next()
  })

  Route.put('/categorias/:id', (req, res, next) => {
    const { id, name, description } = req.params

    if (name == null) {
      res.send(500, {
        error: 'name_null',
        message: 'Nome da categoria não pode ser vazio'
      })
    }

    const data = Object.assign({}, {name, description}, {
      name: name,
      description: description,
      updated: new Date()
    })

    let query = { _id: new ObjectId(id) }
    let body = { $set: data }
    let opts = {
      returnOriginal: false,
      upsert: true
    }

    categoriesCollection.findOneAndUpdate(query, body, opts)
      .then(doc => res.send(204))
      .catch(err => res.send(500, err))

    next()
  })

  Route.del('/categorias/:id', (req, res, next) => {
    categoriesCollection.findOneAndDelete({_id: new ObjectId(req.params.id)})
      .then(doc => res.send(204, doc))
      .catch(err => res.send(500, err))

    next()
  })
}
