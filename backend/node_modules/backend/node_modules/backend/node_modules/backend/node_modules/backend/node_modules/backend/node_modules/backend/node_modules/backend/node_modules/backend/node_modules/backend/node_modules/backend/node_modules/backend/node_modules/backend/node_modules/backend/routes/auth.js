const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const pool = require('../db');

router.post('/login', async (req, res)=> {
    const {email, password} = req.body;
    try {
        const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
        const user = result.rows[0];
        if(!user) {
            return res.status(400).send('User not found!');
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch){
            return res.status(400).send('Incorrect password');
        }
        const token = jwt.sign({id: user.id, role: user.role}, process.env.JWT_SECRET, {expiresIn: '1h'});
        res.json({token});
    } catch (err) {
        console.error('Error logging in:', err);
        res.status(500).send('Server Error');
    }
});

module.exports = router;