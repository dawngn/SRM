import React, { useState } from "react";
import {useSignup} from '../hooks/useSignup'


const Signup = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const {signup, error, loading} = useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(user, password)

   
  }

  return(
    <form className="signup" onSubmit={handleSubmit}>
     <h3>Sign up</h3>

      <label >User</label>
      <input type="text" value={user} onChange={e => setUser(e.target.value)} />

      <label >Password</label>
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

      <button disabled ={loading}>Sign up</button>
      {error && <div className="error">{error}</div>}
    </form>  
  )
}

export default Signup