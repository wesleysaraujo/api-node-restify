module.exports = {
  name: 'Restiful WS API',
  version: '1.0.0',
  port: process.env.PORT || 3457,
  env: process.env.NODE_ENV || 'development',
  base_url: process.env.BASE_URL || 'http://localhost:3457',
  db: {
    uri: process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/restful_ws'
  }
}
