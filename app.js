const express = require("express");
const createError = require('http-errors');
const errorHandlingMiddleware = require("./middleware/error-handling.middleware");
const app = express();
const PORT = process.env.PORT || 8000; 
const mainRouter = require('./routes');
const cookieParser = require("cookie-parser");
const { user } = require("./config/prisma-config");


app.use(express.json());
app.use(cookieParser());

app.use(mainRouter);



const authenticationMiddleware =(req, res, next) =>{
    if(req.cookies.login === "true"){
        next();
    } else {
        res.status(403).json({ message: "Unauthorized" });
    }
};

app.get('/secret', authenticationMiddleware, (req, res, next) =>{
    console.log(req.cookies);
    res.status(200).json({ message: "you found the secret" });
});

app.use('*', (req, res, next) =>{
    
    next(createError(404, "This is not found"));
})



app.use(errorHandlingMiddleware);

app.listen(PORT, () => {
    console.log(`app running on port ${PORT} `);
});