const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection (replace with your own URI in .env)
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/healthconnect';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

const appointmentRoutes = require('./routes/appointments');
app.use('/api/appointments', appointmentRoutes);

// Test endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'Backend is running!' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 