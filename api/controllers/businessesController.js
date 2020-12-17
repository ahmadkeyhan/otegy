const Business = require('../models/Business');
const validator = require('express-validator');

// Get all
module.exports.list = function (req, res, next) {
  Business.find({}, function(err, businesses){
    if(err) {
        return res.status(500).json({
            message: 'Error getting records.'
        });
    }
    return res.json(businesses);
  });
}


// Get one
module.exports.show = function(req, res) {
  var id = req.params.id;
  Business.findOne({_id: id}, function(err, business){
      if(err) {
          return res.status(500).json({
              message: 'Error getting record.'
          });
      }
      if(!business) {
          return res.status(404).json({
              message: 'No such record'
          });
      }
      return res.json(business);
  });
}

// Get industry
module.exports.industry = function (req, res, next) {
  var industry = req.params.industry;
  Business.find({industry: industry}, function(err, businesses){
    if(err) {
        return res.status(500).json({
            message: 'Error getting records.'
        });
    }
    return res.json(businesses);
  });
}

// Create
module.exports.create = [
  // validations rules
  validator.body('title', 'عنوان مجموعه').isLength({ min: 1 }),
  validator.body('title').custom(value => {
    return Business.findOne({title:value}).then(business => {
      if (business !== null) {
        return Promise.reject('Title already in use');
      }
    })
  }),
  validator.body('role', 'Please enter interviewee role').isLength({ min: 1 }),
  validator.body('fullname', 'Please enter interviewee full name').isLength({ min: 1 }),
  validator.body('phone', 'Please enter interviewee phone').isLength({ min: 1 }),
  validator.body('industry', 'Please enter Business industry').isLength({ min: 1 }),
  validator.body('address', 'Please enter Business address').isLength({ min: 1 }),
  validator.body('advantage', 'Please enter Business competitive advantage').isLength({ min: 1 }),
  validator.body('target', 'Please enter Business target customer').isLength({ min: 1 }),
  validator.body('instagram', 'Please enter Business instagram page').isLength({ min: 1 }),
  validator.body('bestseller', 'Please enter Business bestseller product').isLength({ min: 1 }),

  function(req, res) {
    // throw validation errors
    const errors = validator.validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.mapped() });
    }

    // initialize record
    var business = new Business({
        title : req.body.title,
        role : req.body.role,
        fullname : req.body.fullname,
        phone : req.body.phone,
        industry : req.body.industry,
        address : req.body.address,
        advantage : req.body.advantage,
        target : req.body.target,
        instagram : req.body.instagram,
        website : req.body.website,
        bestseller : req.body.bestseller
    })

    // save record
    business.save(function(err, business){
        if(err) {
            return res.status(500).json({
                message: 'Error saving record',
                error: err
            });
        }
        return res.json({
            message: 'saved',
            _id: business._id
        });
    })
  }
]


// Delete
module.exports.delete = function(req, res) {
  var id = req.params.id;
  Business.findByIdAndRemove(id, function(err, business){
      if(err) {
          return res.status(500).json({
              message: 'Error getting record.'
          });
      }
      return res.json(business);
  });
}
