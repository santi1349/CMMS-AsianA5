const express = require('express');
const router = express.Router();

const testJSON = [
    {
        name: 'Santi',
        username: 'Admin',
    },
    {
        name: 'Piyawat',
        usermane: 'user',
    }
];

    router.get('/', (req, res, nexr) => {
        res.json(testJSON);
    });

module.exports = router;