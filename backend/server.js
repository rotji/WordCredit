const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db'); // Import the database connection function
require('dotenv').config(); // Load environment variables

const publicRoutes = require('./routes/public'); // Public routes
const privateRoutes = require('./routes/private'); // Private routes

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/public', publicRoutes); // Public endpoints
app.use('/api/private', privateRoutes); // Private endpoints

// Error handling middleware (optional, for debugging purposes)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
