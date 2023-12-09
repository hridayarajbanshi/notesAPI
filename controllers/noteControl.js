const mongoose = require("mongoose");
const noteModal = require('../models/note');
const createNote = async(req, res)=>{
  const {title, description} = req.body;
  if(!title){
    return res.status(400).json({message: "Title is required"});
  }
  if(!description){
    return res.status(400).json({message: "Description is required"});
  }
  const newNote = new noteModal({
    title: req.body.title,
    description: req.body.description,
    userId: req.userId,
  });
  try {
    await newNote.save();
    res.status(200).json(newNote);

    
  } catch (error) {
    console.log(error);
    res.status(500).json({message: "Something went wrong"});
    
  }

}
const updateNote = (req, res)=>{}
const deleteNote = (req, res)=>{}
const getNotes = async (req, res)=>{
  try {
    const notes = await noteModal.find({userId: req.userId});
    res.status(200).json(notes);
    
  } catch (error) {
    console.log(error);
    res.status(500).json({message: "Something went wrong"});
  }

}
module.exports = {createNote, updateNote, deleteNote, getNotes};