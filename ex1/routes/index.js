var express = require('express');
var router = express.Router();
var Contract = require('../controllers/contrato')

/* GET home page. */
router.get('/contracts', function(req, res, next) {
  var year = null
  var inst = null
  if (req.query.year) {
    year = req.query.year
  }
  if (req.query.inst) {
    inst = req.query.inst
  }

  Contract.list(year, inst)
  .then(data => {
    res.send(data)
  })
  .catch(err => {
    console.log("Error: " + err)
  })
});

router.get('/contracts/courses', function(req, res, next) {
  Contract.courses()
  .then(data => {
    res.send(data)
  })
  .catch(err => {
    console.log("Error: " + err)
  })
})

router.get('/contracts/insitutions', function(req, res, next) {
  Contract.institutions()
  .then(data => {
    res.send(data)
  })
  .catch(err => {
    console.log("Error: " + err)
  })
})

router.get('/contracts/:id', function(req, res, next) {
  Contract.get(req.params.id)
  .then(data => {
    res.send(data)
  })
  .catch(err => {
    console.log("Error: " + err)
  })
});





router.post('/contracts', function(req, res, next) {
  Contract.addContract(req.body)
  .then(data => {
    res.send(data)
  })
  .catch(err => {
    console.log("Error: " + err)
  })
})




router.delete('/contracts/:id', function(req, res, next) {
  Contract.removeContract(req.params.id)
  .then(data => {
    res.send(data)
  })
  .catch(err => {
    console.log("Error: " + err)
  })
})

module.exports = router;
