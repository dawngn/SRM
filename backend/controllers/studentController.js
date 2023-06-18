const Student = require('../models/Student');
const mongoose = require('mongoose');


// Get a student by RollNumber
const getStudent = async (req , res) => {
  try {
    const { RollNumber } = req.params;
    const student = await Student.find({RollNumber});
    if (student) {
      return res.json(student);
    }
    res.status(404).json({ message: 'Student not found!' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}


module.exports = { getStudent };