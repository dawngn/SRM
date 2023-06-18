//components
import { useState } from 'react';
import StudentDetails from '../components/StudentDetails';
import StudentForm from '../components/StudentForm';


const Student = () => {
  
  const [student, setStudent] = useState(null);
  


  return (

    <div className='student'>
      <div className='students'>
          {student && student.map((student) => (
            <StudentDetails key={student.RollNumber} student={student}/> 
          ))}

       </div>
        <StudentForm setStudent={setStudent}/>
    </div>

  );
}

export default Student;