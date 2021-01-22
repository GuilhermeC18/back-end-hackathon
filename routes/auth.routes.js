const { route } = require('./user.routes');

const router = require('express').Router();
const { register } = require('../controller/auth.controller');
const { login } = require('../controller/auth.controller');

router.post('/register', register);
router.post('/login', login);

module.exports = router; 