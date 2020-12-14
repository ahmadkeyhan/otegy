const Product = require('../models/Product');
const validator = require('express-validator');

// Get all
module.exports.list = function (req, res, next) {
  Product.find({}, function(err, products){
    if(err) {
        return res.status(500).json({
            message: 'Error getting records.'
        });
    }
    return res.json(products);
  });
}


// Get one
module.exports.show = function(req, res) {
  var id = req.params.id;
  Product.findOne({_id: id}, function(err, product){
      if(err) {
          return res.status(500).json({
              message: 'Error getting record.'
          });
      }
      if(!product) {
          return res.status(404).json({
              message: 'No such record'
          });
      }
      return res.json(product);
  });
}

// Get type

module.exports.type = function (req, res, next) {
  var type = req.params.type;
  Product.find({type: type}, function(err, products){
    if(err) {
        return res.status(500).json({
            message: 'Error getting records.'
        });
    }
    return res.json(products);
  });
}

// Get project

module.exports.project = function (req, res, next) {
  var project = req.params.project;
  Product.find({project: project}, function(err, products){
    if(err) {
        return res.status(500).json({
            message: 'Error getting records.'
        });
    }
    return res.json(products);
  });
}


// Create
module.exports.create = [
  // validations rules
  validator.body('title', 'Please enter Product Title').isLength({ min: 1 }),
  validator.body('title').custom(value => {
    return Product.findOne({title:value}).then(product => {
      if (product !== null) {
        return Promise.reject('Title already in use');
      }
    })
  }),
  validator.body('url', 'Please enter product location').isLength({ min: 1 }),
  validator.body('type', 'Please enter product type').isLength({ min: 1 }),
  validator.body('project', 'Please enter the project name').isLength({ min: 1 }),
  validator.body('body', 'Please enter Product info').isLength({ min: 1 }),

  function(req, res) {
    // throw validation errors
    const errors = validator.validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.mapped() });
    }

    // initialize record
    var product = new Product({
        title : req.body.title,
        url : req.body.url,
        type : req.body.type,
        project : req.body.project,
        body : req.body.body,
    })

    // save record
    product.save(function(err, product){
        if(err) {
            return res.status(500).json({
                message: 'Error saving record',
                error: err
            });
        }
        return res.json({
            message: 'saved',
            _id: product._id
        });
    })
  }
]


// Delete
module.exports.delete = function(req, res) {
  var id = req.params.id;
  Product.findByIdAndRemove(id, function(err, product){
      if(err) {
          return res.status(500).json({
              message: 'Error getting record.'
          });
      }
      return res.json(product);
  });
}
