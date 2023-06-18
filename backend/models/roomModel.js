const mongoose = require("mongoose");
const usableRooms = require('./usableRooms');

const roomSchema = new mongoose.Schema({
  details: {
    type: String,
    required: true,
    unique: true,
  },
  room: {
    type: String,
    required: true,
  },
  subject:{
    type: String,
    required: true,
  },
  slot:{
    type: String,
    required: true,
  },
  day:{
    type: String,
    required: true,
  },
  teacher:{
    type: String,
    required: true,
  },

  }
);

roomSchema.statics.freeRoomOfSlotByDate = async function (day, slot) {
  const dataRoomsOfDate = await this.find({ day: day });
   if (dataRoomsOfDate.length === 0) {
    return "No data found";
  }
  const dataRoomsUsedInSlot = dataRoomsOfDate.filter((room) => room.slot === slot);
  const usedRooms = dataRoomsUsedInSlot.map((room) => room.room);
  const freeRoom = usableRooms.filter((room) => !usedRooms.includes(room));
  return freeRoom;
}




module.exports = mongoose.model("Rooms", roomSchema);
