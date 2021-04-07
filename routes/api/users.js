const express = require('express');
const router = express.Router();

// Import our User model
const User = require('../../models/user');

// Get User List.
router.get('/list', (req, res, next) => {
    // Find all matching users, which in the case is all of 'em
    User.find((err, users) => {
        if (err) {
            //if something's broken, send an error
            res.send(err);
        }
        //Otherwise, send rhe array of users.
        res.json(users);
    });
});

module.exports = router;
