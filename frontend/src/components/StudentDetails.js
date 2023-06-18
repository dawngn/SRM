
const StudentDetails = ({ student }) => {

  const date = new Date(student.DateOfBirth).toLocaleDateString()
  const dateOfIssue = new Date(student.DateOfIssue).toLocaleDateString()
  return (
    
    <div className='student-details'>
      <h4>{student.RollNumber}</h4>
      <p><strong>Current term : </strong>{ student.CurrentTermNo }</p>
      <p><strong>Name : </strong>{ student.Fullname }</p>
      <p><strong>DateOfBirth : </strong>{date}</p>
      <p><strong>Gender : </strong>{ student.Gender?"Male":"Female"  }</p>
      <p><strong>MobilePhone : </strong>{ student.MobilePhone  }</p>
      <p><strong>Email : </strong>{ student.Email }</p>
      <p><strong>Major : </strong>{ student.ChuyenNganh }</p>
      <br/>
      <p><strong>ID card : </strong>{ student.IDCard }</p>
      <p><strong>Date of issue : </strong>{ dateOfIssue }</p>
      <p><strong>Place of issue : </strong>{ student.PlaceOfIssue }</p>
      <p><strong>Address : </strong>{ student.Address }</p>
      <br/>
      <p><strong>Parent name : </strong>{ student.ParentName }</p>
      <p><strong>Parent job : </strong>{ student.ParentJob }</p>
      <p><strong>Place of work  : </strong>{ student.PlaceOfWork }</p>
      <p><strong>Parent phone : </strong>{ student.ParentPhone }</p>
      <p><strong>Parent address : </strong>{ student.ParentAddress }</p>
      <p><strong>Parent email : </strong>{ student.ParentEmail }</p>
      
    </div>
  );
}

export default StudentDetails;