import { Link } from 'react-router-dom';
import * as FaIcos from "react-icons/fa";
import { MdLogout } from "react-icons/md";

import './Navbar.css';

import { useState } from 'react';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';





const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const {logout} = useLogout()
  const {user} = useAuthContext()


  const handleClick = () => {
    logout()
  }

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <header>
      
      <div className="container">
       <Link to="#" className='menu-bars' >
         {user && <FaIcos.FaBars onClick={showSidebar} /> }
      </Link>
      <Link to="/">
          <h1>SRM</h1>
      </Link>
       <nav>
         
        <div className='user'>
        {user &&(<div>
         <span>{user.username}</span> 
         {user.username === 'hahaha' && <Link to="/Signup">Signup</Link>}
        <button onClick={handleClick}><MdLogout/></button>
        </div>  
        )}
        {!user && (
        <div> 
        <Link to="/Login">Login</Link>
        </div>
        )}

          
        </div>
        </nav>
      </div>


      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>

        <ul className='nav-menu-items' onClick={showSidebar}>
        
          <li className='nav-text'>
            <Link to='/'>
              <span>Home</span>
            </Link>
          </li>
          <li className='nav-text'>
            <Link to='/Student'>
              <span>Student Info</span>
            </Link>
          </li>
          <li className='nav-text'>
            <Link to='/Room'>
              <span>Empty Room</span>
            </Link>
          </li>
          <li className='nav-text'>
            <Link to='/Mark'>
              <span>Mark Report</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>

  );
}

export default Navbar;