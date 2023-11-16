const express = require("express");
const noteRouter = express.Router();

noteRouter.get("/", (req, res)=>{
  res.send("notes");
})
noteRouter.post("/new", (req, res)=>{
  res.send("new note"); 
})

module.exports = noteRouter;
