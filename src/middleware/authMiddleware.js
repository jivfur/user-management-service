// src/middleware/authMiddleware.js
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/auth');

const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'Access denied. No token provided.' });
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(400).json({ message: 'Invalid token.', error: error.message });
    }
};

module.exports = authMiddleware;
