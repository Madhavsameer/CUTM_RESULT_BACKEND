require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

// Create Express app
const app = express();
app.use(cors({ origin: 'https://cutmresult.netlify.app' }));

// Connect to MongoDB
connectDB();

// Define routes
app.use('/api/students', require('./routes/studentRoutes'));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
