const express = require('express');
const app = express();
const calculateRoutes = require('./routes/calculate');
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.use('/api', calculateRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
