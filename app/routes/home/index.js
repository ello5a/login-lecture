const express = require('express');
const app = express.Router();

const ctrl = require('./home.ctrl.js');

router.get('/',ctrl.output.index);
router.get('/login',ctrl.output.login);

module.exports = router;