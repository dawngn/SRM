 import { BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';
 import { useAuthContext } from './hooks/useAuthContext';

//pages & components
import Home from './pages/Home';
import Student from './pages/Student';
import Room from './pages/Room';
import Mark from './pages/Mark';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Signup from './pages/Signup';


function App() {


  const {user} = useAuthContext()





  return (

    <div className="App" id='theme'>

      <BrowserRouter>
   
        <Navbar />
        <div className='pages'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Login' element={!user ? <Login /> :<Navigate to="/" />} />
            <Route path='/Signup' element={ user && user.username === 'hahaha'  && <Signup /> } />
            <Route path='/Student' element={user ? <Student /> :<Navigate to="/Login" />} />
            <Route path='/Room' element={user ? <Room /> :<Navigate to="/Login" />} />
            <Route path='/Mark' element={<Mark />} />
          </Routes>
         </div>
        
      </BrowserRouter>
    </div>

  );
}


export default App;
