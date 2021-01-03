const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Business = new Schema ({
  title: { type: String, required: true, index: { unique: true } },
  role: { type: String, required: true },
  fullname: { type: String, required: true },
  phone: { type: Number, required: true },
  industry: { type: String, required: true },
  address: { type: String, required: true },
  advantage: { type: String, required: true },
  target: { type: String, required: true },
  instagram: { type: String, required: true },
  website: { type: String },
  bestseller: { type: String, required: true }
});

module.exports = mongoose.model('Business', Business)
