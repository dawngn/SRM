const RoomDetails = ({room}) => {

  return (
    <div className="room-details">
      <p><strong>Slot {room.slot} : </strong>{(room.rooms).toString()}</p>
    </div>
  );
};

export default RoomDetails;

