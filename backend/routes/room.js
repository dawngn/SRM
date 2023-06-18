const express = require('express');
const {getRoom, getRoomOfDate} = require('../controllers/roomController');
const requireAuth = require('../middleware/requireAuth');

const router = express.Router();
router.use(requireAuth)

//GET Room
router.post('/' , getRoom);
router.post('/allDay' , getRoomOfDate);

module.exports = router;