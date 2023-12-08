const userModal = require("../models/user");
const jwt = require("jsonwebtoken");
const SERECT_KEY = "NOTESAPI";
const register = async (req, res) =>{
  const {username, password, email} = req.body;
  try{
    const existUser = await userModal.findOne({email: email});
    if(existUser){
      return res.status(400).json({message: "User already exist"});
    }
   
    const result = await userModal.create({
      username: username,
       password: password,
        email: email
      });
      const token = jwt.sign(
        {email: result.email, id: result._id},SERECT_KEY,
      )
      return res.status(200).json({user: result, token: token});

  }catch(err){
    console.log(err);
    return res.status(500).json({message: "Something went wrong"});
  
  }
}

const signIn = async (req, res) =>{
  const {email, password} = req.body;
  try{
    const existUser = await userModal.findOne({email: email});
    if(!existUser){
      return res.status(404).json({message: "User not found"});
    }
   
  
    const token = jwt.sign(
      {email: existUser.email, id: existUser._id},SERECT_KEY,)
      return res.status(200).json({user: existUser, token: token});



  }catch(error){
    console.log(error);
    return res.status(500).json({message: "Something went wrong"});


  }

}
module.exports = {register, signIn};