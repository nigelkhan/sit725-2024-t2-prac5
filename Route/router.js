const saveContact = require('../controller');  // Ensure the path is correct
const express = require('express');
const router = express.Router();

router.post('/submitForm', saveContact);

module.exports = (app) => {
    app.use(router);  // Attach the router to the app
};
