const express = require('express');
const { calculateSalary } = require('../controllers/salaryController');
const router = express.Router();

router.post('/calculate', calculateSalary);

module.exports = router;
