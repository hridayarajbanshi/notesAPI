const express = require("express");
const auth = require("../middleware/auth");
const { createNote, getNotes, deleteNote, updateNote } = require("../controllers/noteControl");
const noteRouter = express.Router();

noteRouter.get("/",auth, getNotes);
noteRouter.post("/new",auth, createNote);
noteRouter.delete("/:id", auth, deleteNote);
noteRouter.put("/:id",auth, updateNote);

module.exports = noteRouter;
