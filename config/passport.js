/*
Filename: passport.js
Author: Kevin Lamanna
StudentID: 301224451
Date: June 30th 2023
Web App name: https://kevin-lamanna-express-site.herokuapp.com/
*/

const passport = require('passport');
const UserModel = require('../models/user');

module.exports = function () {

  passport.serializeUser((user, done) => {
    console.log("====>serializeUser")
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    console.log("====>deserializeUser")
    try {
      let user = await UserModel.findOne({ _id: id }, '-password -salt');
      return done(null, user);
    } catch (error) {
      done(error);
    }
  });

  require('./local')();
};