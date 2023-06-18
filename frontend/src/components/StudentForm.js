import React, { useState } from 'react';
import {useAuthContext} from '../hooks/useAuthContext';

const StudentForm = (props) => {

  const [error , setError] = useState(null)
  const {user} = useAuthContext()

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!user){
      setError('Please Login to continue')
      return;
    }
    const RollNumber = e.target.RollNumber.value;
    const response = await fetch(process.env.REACT_APP_API_URL +'/student/' + RollNumber, {
      method: 'GET',
      headers: {
        
        'Authorization': 'Bearer ' + user.token
      }
    })
    const data = await response.json()
    if(data.length === 0){
      setError('Student not found !')
      e.target.RollNumber.value = ''
      return;
    }
    setError(null)
    e.target.RollNumber.value = ''
    console.log(data)
    props.setStudent(data)

  }



  

  return(
    <div className='student-form'>
      <form onSubmit={ handleSubmit}>
      <h3>Search a student</h3>
        <label>Student ID : </label>
        <input
          type='text'
          required
          name='RollNumber'
          placeholder='Ex:SEXXXXXX'
        />
        <button >Search</button>

      </form>
      {error && <div className='error'>{error}</div>}
    </div>
  )
}

export default StudentForm;