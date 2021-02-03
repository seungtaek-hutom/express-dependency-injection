const express = require('express');
const helloRouter = require('./hello');

const router = express.Router();

router.use('/hello', helloRouter);

module.exports = router;