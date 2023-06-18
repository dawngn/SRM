import React, { useState } from 'react'
import RoomDetails from '../components/RoomDetails'
import RoomForm from '../components/RoomForm'

const Room = () => {

  const [room, setRoom] = useState(null);

  const inputClasses = room ? "inputSuccess" : "inputError";

  return (
    <div className='room'>
      <RoomForm setRoom={setRoom}/>
      <div  className={inputClasses}  >
          {room && room.map((room) => (
               <RoomDetails  key={room.slot} room={room}/>
           
          ))}
      </div>
    </div>
  )
}

export default Room