import {useState} from 'react';
import {useAuthContext} from './useAuthContext';

export const useSignup = () => {
  const [error,setError]=useState(null);
  const [loading,setLoading]=useState(false);
  const {dispatch} = useAuthContext()

  const signup = async (username, password) => {
    setLoading(true)
    setError(null)
    
    const response = await fetch('http://localhost:4000/api/user/register',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({username, password})
    })
    const json= await response.json()
    
    if(!response.ok) {
      setLoading(false)
      setError(json.error)
    }
    if(response.ok) {
      //save user to local storage
      localStorage.setItem('user', JSON.stringify(json))


      //update auth context
      dispatch({type: 'LOGIN', payload: json })
      setLoading(false)

    }
 

  }
  return {signup, error, loading}
}