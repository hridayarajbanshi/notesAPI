const jwt = require("jsonwebtoken");
const SERECT_KEY = "NOTESAPI";

const auth =  (req, res, next)=> {
  try {
    let token = req.headers.authorization.split(" ")[1];
    if(token){
      return token;
      let user = jwt.verify(token, SERECT_KEY);
      req.userId = user.id;
    }
    else{
      return res.status(401).json({message: "Auth failed"});
    
    }
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({message: "Auth failed"});
    
  }
}

module.exports = auth;
