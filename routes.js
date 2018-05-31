"use strict";

// Routes, with inline controllers for each route.
var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.render('home')
});

router.get('/continuity', (req, res) => {
  res.render('continuity')
})

router.get('/about', (req, res) => {
  res.render('about')
})
module.exports = router;
