const client = require('../config/prisma-config');
const createError = require('http-errors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
//the HR people need a general password in order to register themselves. 
//the other users won't register themselves, they need to be added by the HR people. 
//I should probably create another table called Admin. 

findUserByEmail = async (email) =>{
    const user = await client.user.findUnique({ where: { email}});
    return user; 
}; 


exports.register = async (req, res, next) =>{
  try{
     const { email, name, password, isHR, position} = req.body; 
     const userExist = await findUserByEmail(email);
     if(userExist) {
         throw createError(422, 'User already registered');
     }
     const hashedPassword = await bcrypt.hash(password, 12);
     const newUser = await client.user.create({
        data:
        { email, 
          name,
          hashedPassword,
          isHR,
          position
        }});
     res.status(201).json({message: "User Created", userId: newUser.id});
  } catch(err) {
     next(err);
  }
};

exports.login = async(req, res, next) =>{
    try {
        const { email, password } = req.body;
        const user = await client.user.findUnique({ where: {email } });
        if(!user) {
            throw createError(401, "Wrong Credentials");
        }
        const isPasswordEqual = password === user.password;
        if(!isPasswordEqual){
            throw createError(401, "Wrong Credentials");
            //where is the info on process.env.JWT_SECRET coming from?
            const token = jwt.sign({ id: user.id}, process.env.JWT_SECRET, {
                expiresIn: '1h',
            });
        } res
            .status(200)
            .cookie('token', token, { httpOnly: true})
            .json({ token, userId: user.id });
     } catch(err){
        next(err);
    }
}