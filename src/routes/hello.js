const express = require('express');
const helloModel = require('../models/hello');
const HelloService = require('../services/hello');

const router = express.Router();

const helloService = new HelloService(helloModel);

router.get('/', (req, res) => {
  helloService.sayHello();
  res.send('hello');
})

module.exports = router;