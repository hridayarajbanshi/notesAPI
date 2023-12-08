const jwt = require("jsonwebtoken");
const SERECT_KEY = "NOTESAPI";

const auth =  (req, res, next)=> {
  try {
    console.log(req.headers);

    
    let token = req.headers['authorization']
    
    console.log(token)
    if(token){
      token = token.split(" ")[1];
      let user = jwt.verify(token, SERECT_KEY);
      req.userId = user.id;
      return token;
    }
    else{
      return res.status(401).json({message: "Aut failed"});
    }
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({message: "Auth failed"});
    
  }
}

module.exports = auth;
