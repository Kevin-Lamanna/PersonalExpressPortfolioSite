/*
Filename: business_contact.js
Author: Kevin Lamanna
StudentID: 301224451
Web App name: https://kevin-lamanna-express-site.herokuapp.com/
*/

// Import
let mongoose = require('mongoose');

// Create a model class
let contactModel = mongoose.Schema(
    {
        name: String,
        number: String,
        email: String            
    },
    {
        collection: "business_contacts"
    }
);

module.exports = mongoose.model("BusinessContact", contactModel);