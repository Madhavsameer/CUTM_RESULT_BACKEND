const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

// Get student by registration number
router.get('/:regNo', async (req, res) => {
    try {
        const regNo = req.params.regNo;
        const student = await Student.find({ Reg_No: regNo });
        res.json(student);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
