const express = require('express');
const router = express.Router();

const User = require('../models/User');

router.post('/', async (req, res) => {
    const { email, password } = req.body;

    try {
        const newUser = new User({
            email,
            password
        });

        await newUser.save();
        res.json(newUser);
    } catch (err) {
        console.error(err);
        res.status(500).json(err.message);
    }
});

module.exports = router;
