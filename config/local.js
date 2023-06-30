/*
Filename: local.js
Author: Kevin Lamanna
StudentID: 301224451
Date: June 30th 2023
Web App name: https://kevin-lamanna-express-site.herokuapp.com/
*/

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const UserModel = require('../models/user');

module.exports = () => {
    passport.use(new LocalStrategy(async (username, password, done) => {

        try {
            console.log("====> LocalStrategy")

            let user = await UserModel.findOne({ username: username });
            if (!user) {
                return done(null, false, {
                    message: 'Unknown user'
                });
            }

            if (!user.authenticate(password)) {
                return done(null, false, {
                    message: 'Invalid password'
                });
            }

            // res.locals.userName = user.username;
            user.password = "";
            user.salt = "";
            console.log("====> LocalStrategy User.findOne")
            return done(null, user);

        } catch (error) {
            return done(error);
        }
    }));
};