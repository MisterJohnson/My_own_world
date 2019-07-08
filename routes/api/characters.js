const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

//Need to require the characters model
//const Character = require('../../models/character');

// @route   GET api/characters/test
// @desc    Tests characters route
// @access  Public
router.get("/test", (req, res) => {
  res.json({ msg: "posts works" });
});

// @route   GET api/characters
// @desc    get all the characters route
// @access  Public
router.get("/", (req, res) => {
  Post.find()
    .sort({ date: -1 })
    .then(posts => {
      return res.json(posts);
    })
    .catch(err => res.status(404).json({ nopostfound: "No posts found" }));
});

// @route   GET api/posts/:id
// @desc    get all the posts route
// @access  Public
router.get("/:id", (req, res) => {
  Post.findById(req.params.id)
    .then(post => {
      return res.json(post);
    })
    .catch(err =>
      res.status(404).json({ nopostfound: "No post found for that id" })
    );
});
