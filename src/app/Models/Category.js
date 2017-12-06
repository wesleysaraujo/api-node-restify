const mongoose = require('mongoose')
const mongooseStringQuery = require('mongoose-string-query')
const timestamp = require('mongoose-timestamp')

const CategorySchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
      trim: true
    },
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: false
    }
  },
  {Collection: 'categories'}
)

CategorySchema.plugin(timestamp)
CategorySchema.plugin(mongooseStringQuery)

const Category = mongoose.model('Category', CategorySchema)

module.exports = Category
