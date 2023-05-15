var express = require('express');
var router = express.Router();
var axios = require('axios')

/* GET home page. */
router.get('/', function(req, res, next) {
  axios.get("http://localhost:15015/contracts")
  .then(data => {
    res.render("index.pug", {contracts: data.data})
  })
  .catch(err => {
    console.log("Error: " + String(err))
  })
});

router.get('/inst/:nipc', function(req, res, next) {
  axios.get("http://localhost:15015/contracts?inst=" + req.params.nipc)
  .then(data => {
    res.render("instituicao.pug", {contracts: data.data})
  })
  .catch(err => {
    console.log("Error: " + String(err))
  })
});

router.get('/:id', function(req, res, next) {
  axios.get("http://localhost:15015/contracts/" + req.params.id)
  .then(data => {
    res.render("contrato.pug", {contract: data.data})
  })
  .catch(err => {
    console.log("Error: " + String(err))
  })
});


module.exports = router;
