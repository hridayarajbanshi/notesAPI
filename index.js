const express = require("express");
const app = express();
const posts = require("./posts.json");
const mongoose = require("mongoose");
app.use(express.json());

app.use((req, res, next)=> {
  console.log("HTTP " + req.method + " " + req.url);
  next();

})



app.use("/users", require("./routes/user"));
app.use("/notes", require("./routes/notes"));
app.get('/', (req, res) => {
  res.send("Hello World");
})
app.get("/posts", (req, res)=>{
  res.status(200).json(posts);
})

mongoose.connect("mongodb+srv://admin:admin@cluster0.5rfcm3q.mongodb.net/?retryWrites=true&w=majority").then(()=>{
  app.listen(3000, ()=>{
    console.log("server running");
  })
})
.catch(err=>{
  console.log(err);
} )