const router = require('express').Router();
const userRouter = require("./user.routes");

router.use('/User', userRouter);
module.exports = router; 