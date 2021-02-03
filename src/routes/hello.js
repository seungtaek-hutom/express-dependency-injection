const express = require('express');
const helloService = require('../services/hello');

const router = express.Router();

router.get('/', (req, res) => {
  helloService.sayHello();
  res.send('hello');
})

module.exports = router;