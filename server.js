require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// IN-MEMORY MOCK DATABASE
const db = {
    admin: { username: 'admin', password: 'password123' },
    bookings: [],
    reviews: [
        { name: 'Sarah Jenkins', rating: 5, message: 'Absolutely stunning event! Everything was handled perfectly.' },
        { name: 'Michael Chen', rating: 4, message: 'Great corporate event planning, highly recommended.' }
    ]
};

// Admin Login
app.post('/api/admin/login', (req, res) => {
    try {
        const { username, password } = req.body;
        if (username === db.admin.username && password === db.admin.password) {
            res.status(200).json({ message: "Login successful", success: true });
        } else {
            res.status(401).json({ error: "Invalid username or password", success: false });
        }
    } catch (error) {
        res.status(500).json({ error: "Server error", success: false });
    }
});

// Add Booking
app.post('/api/bookings', (req, res) => {
    try {
        db.bookings.push(req.body);
        res.status(201).json({ message: "Booked successfully!" });
    } catch (error) {
        res.status(500).json({ error: "Error saving booking." });
    }
});

// Fetch All Bookings
app.get('/api/bookings', (req, res) => {
    try {
        res.status(200).json(db.bookings);
    } catch (error) {
        res.status(500).json({ error: "Error retrieving bookings." });
    }
});

// Add Review
app.post('/api/reviews', (req, res) => {
    try {
        db.reviews.unshift(req.body); // Add to beginning
        res.status(201).json({ message: "Review added successfully!" });
    } catch (error) {
        res.status(500).json({ error: "Error saving review." });
    }
});

// Fetch Reviews
app.get('/api/reviews', (req, res) => {
    try {
        res.status(200).json(db.reviews);
    } catch (error) {
        res.status(500).json({ error: "Error retrieving reviews." });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`In-Memory Server running on port ${PORT}`));
