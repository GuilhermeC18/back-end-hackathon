const router = require("express").Router();
const userRouter = require("./user.routes");
const authRoutes = require("./auth.routes");

router.use('/auth', authRoutes);
router.use('/user', userRouter);
module.exports = router; 
