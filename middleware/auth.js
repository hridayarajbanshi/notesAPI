const jwt = require("jsonwebtoken");
const SERECT_KEY = "NOTESAPI";

const auth = async (req, res, next)=> {
  try {
    let token = req.headers['authorization'] || req.headers.authorization;
    console.log(token)
    if(token){
     
      let user = await jwt.verify(token, SERECT_KEY);
      console.log(user);
      req.userId = user.id;
      next();
    }
    else{
      return res.status(401).json({message: "Aut failed"});
    }
    
  } catch (error) {
    console.log(error);
    return res.status(401).json({message: "Auth failed"});
    
  }
}

module.exports = auth;
