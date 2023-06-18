const express = require('express');
const {getStudent} = require('../controllers/studentController');
const requireAuth = require('../middleware/requireAuth');

const router = express.Router();
 
router.use(requireAuth)



//GET single student
router.get('/:RollNumber' , getStudent);

module.exports = router;