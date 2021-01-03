const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema ({
  title: { type: String, required: true, index: { unique: true } },
  url: { type: String, required: true },
  type: { type: String, required: true },
  project: { type: String, required: true },
  body: { type: String, required: true },
});

module.exports = mongoose.model('Product', Product)
