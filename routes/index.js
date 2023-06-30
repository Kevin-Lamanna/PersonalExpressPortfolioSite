/*
Filename: index.js
Author: Kevin Lamanna
StudentID: 301224451
Date: June 30th 2023
Web App name: https://kevin-lamanna-express-site.herokuapp.com/
*/

var express = require('express');
var router = express.Router();
let indexController = require('../controllers/index')


/* GET Home page. */
router.get('/', indexController.home);

/* GET Home page. */
router.get('/home', indexController.home);

/* GET About page. */
router.get('/about', indexController.about);

/* GET Projects page. */
router.get('/projects', indexController.projects);

/* GET Services page. */
router.get('/services', indexController.services);

/* GET Contact page. */
router.get('/contact', indexController.contact);

module.exports = router;
