const router = require('express').Router();
const { createUser, updateUser, deleteUser, getAllUsers} = require('../controller/user.controller');

router.post('/', createUser);
router.get('/', getAllUsers);
router.put('/:userId', updateUser);
router.delete('/:userId', deleteUser);


module.exports = router; 