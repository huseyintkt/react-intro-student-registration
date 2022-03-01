import React, { useState } from 'react';
import AddStudent from './components/AddStudent';
import StudentList from './components/StudentList';

const App = () => {
  const [studentList, setStudentList] = useState([]);

  const addStudent = (pStudent) => {
    setStudentList([...studentList, pStudent]);
  };

  return (
    <React.Fragment>
      <div className='container'>
        <div className='row mt-5'>
          <AddStudent addStudent={addStudent} />
          <StudentList studentList={studentList} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
