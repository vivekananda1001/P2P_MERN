const jwt = require('jsonwebtoken');
const { JWT_USER_PASSWORD } = require("../config");

function userMiddleware(req,res,next){
    const token = req.headers.token;
    const decoded = jwt.verify(token,JWT_USER_PASSWORD);
    
    if(decoded){
        req.userId = decoded;
        next();
    }
    else{
        res.status(403).json({
            message: "Incorrect Credentials."
        });
    }
}

module.exports = {
    userMiddleware: userMiddleware
};