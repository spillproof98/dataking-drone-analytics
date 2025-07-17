const express = require('express');
const cors = require('cors');
require('dotenv').config();

const uploadRoutes = require('./routes/uploadRoutes');
const violationRoutes = require('./routes/violationRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/upload-report', uploadRoutes);
app.use('/api/violations', violationRoutes);

app.get('/', (req, res) => {
  res.send('🚀 Dataking Backend is live!');
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`🚀 Backend running at http://localhost:${PORT}`);
});
