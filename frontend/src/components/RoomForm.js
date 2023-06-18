import React, { useState } from 'react';
import {useAuthContext} from '../hooks/useAuthContext';

const RoomForm = (props) => {

  const [error , setError] = useState(null)
  const {user} = useAuthContext()

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const day = e.target.day.value;
    const slots = e.target.slots.value;

    if(!user){
      setError('Please Login to continue')
      return;
    }
    if (slots > 4){
      setError('Maximum 4 slots')
      return;
    }
    if (slots < 1){
      setError('Minimum 1 slot')
      return;
    }
    const response = await fetch(process.env.REACT_APP_API_URL+'/room/allDay',{
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + user.token,
        'Content-type': 'application/json'
      },
      body : JSON.stringify({
        day : day,
        slots : slots
      })
    })
    const data = await response.json()
    if(data.length === 0){
      setError('Not found !')
      e.target.value = ''
      return;
    }
    setError(null)
    e.target.value = ''
    console.log(data)
    props.setRoom(data)

  }



  

  return(
    <div className='room-form'>
      <form onSubmit={ handleSubmit}>
      <h3>Search Empty Room</h3>
        <p>Date : </p>
        <input
          type='text'
          name='day'
          required
          placeholder='Ex:DD/MM/YY'
        />
        <p>Number of slots : </p>
        <select name="slots" id="slots">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
     
       
       
        <br/>
        <button >Search</button>

      </form>
      {error && <div className='error'>{error}</div>}
    </div>
  )
}

export default RoomForm;