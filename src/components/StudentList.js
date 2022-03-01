const StudentList = (props) => {
  const studentList = props.studentList.map((student, index) => (
    <tr key={index}>
      <td>{student.firstName}</td>
      <td>{student.lastName}</td>
    </tr>
  ));

  const table = (
    <table className='table table-bordered'>
      <thead>
        <tr>
          <th>Firstname</th>
          <th>Lastname</th>
        </tr>
      </thead>
      <tbody>{studentList}</tbody>
    </table>
  );

  const message = (
    <div className='alert alert-primary' role='alert'>
      Please register student!
    </div>
  );

  return (
    <div className='col-lg-8'>
      {props.studentList.length === 0 ? message : table}
    </div>
  );
};

export default StudentList;
