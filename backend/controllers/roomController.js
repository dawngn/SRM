const Room = require('../models/roomModel');
const mongoose = require('mongoose');


// Get free room for a given day 
const getRoom = async (req, res) => { 
  try {
    const freeRoom = await Room.freeRoomOfSlotByDate(req.body.day, req.body.slot);

    res.status(200).json(freeRoom);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getRoomOfDate = async (req, res) => { 
  try {
    const numOfSlots = req.body.slots;
    let freeRoom = [];
    for (let i=1; i<=numOfSlots; i++){
      let rooms = await Room.freeRoomOfSlotByDate(req.body.day, i.toString());
      console.log(rooms);
      freeRoom.push({
        slot: i,
        rooms: rooms
      });
    }
    res.status(200).json(freeRoom);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};


module.exports =  {getRoom, getRoomOfDate}