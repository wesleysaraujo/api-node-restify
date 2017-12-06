module.exports = {
  name: 'Restiful WS API',
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3457,
  base_url: process.env.BASE_URL || 'http://localhost:3457',
  db: {
    uri: process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/restiful_ws'
  }
}
