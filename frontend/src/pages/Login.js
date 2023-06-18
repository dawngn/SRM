import React, { useState } from "react";
import {useLogin} from '../hooks/useLogin'

const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const {login, error, loading} = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    await login(user, password)

   
  }

  return(
    <form className="login" onSubmit={handleSubmit}>
     <h3>Login up</h3>

      <label >User</label>
      <input type="text" value={user} onChange={e => setUser(e.target.value)} />

      <label >Password</label>
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

      <button disabled={loading}>Log in</button>
      {error && <div className="error">{error}</div>}
    </form>  

  )
}

export default Login