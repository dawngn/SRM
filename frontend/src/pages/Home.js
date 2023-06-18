import React from 'react'
import { useNavigate } from 'react-router-dom'
import img from '../img/img1.jpg'

const Home = () => {
   

  const navigate = useNavigate();
  const navigateStudent = () => {
    // 👇️ navigate to /
    navigate('/Student');
  };

  return (
    <div className="Home">
     <div className="des">
     <h1 className="App-title">Welcome to SRM</h1>
     <p>Our page is a one-stop-shop for all the information you need about our students. </p> 
     <p>Whether you're a teacher, administrator, or parent, you can use this page to find everything you need to know about our students, including their grades and contact information. 
      </p>
      <p>With an easy-to-use interface and powerful search tools, you can quickly find the information you need and stay up-to-date on the progress of our students. We're committed to providing you with the best possible tools to help you support our users, and our page is just one example of that commitment.</p>
      <button className="try" onClick={navigateStudent}>Try SRM </button>
     </div>
    <div className="img">
    <img src={img} alt="" />
    </div>
     
    
    </div>
  )
}

export default Home


