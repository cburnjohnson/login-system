const express = require('express');
const router = express();

const User = require('../models/User');

router.post('/', async (req, res) => {
    const { email, password } = req.body;

    try {
        const existsUser = await User.findOne(req.body);

        if (existsUser === null) {
            res.status(401).json({ message: 'User not found' });
            return;
        }

        if (existsUser.email !== email || existsUser.password !== password) {
            res.status(401).json({ message: 'Not valid email or password' });
            return;
        }

        res.status(200).json({ message: 'Login Success' });
    } catch (err) {
        console.error(err);
        res.status(401).json({ message: err.message });
    }
});

module.exports = router;
