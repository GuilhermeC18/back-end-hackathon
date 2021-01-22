const router = require('express').Router();
const { createUser, updateUser, deleteUser, getAllUsers} = require('../controller/user.controller');
const authMiddleware = require("../middleware/auth.middleware");


router.post('/',authMiddleware, auth.middleware,  createUser);
router.get('/', getAllUsers);
router.put('/:userId',authMiddleware, updateUser);
router.delete('/:userId', authMiddleware,deleteUser);


module.exports = router; 

