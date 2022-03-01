import { useState } from 'react';

const AddStudent = (props) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStudent = {
      firstName,
      lastName,
    };
    props.addStudent(newStudent);
    clearInputs();
  };

  const clearInputs = () => {
    setFirstName('');
    setLastName('');
  };

  return (
    <div className='col-lg-4'>
      <form>
        <div className='mb-3'>
          <label className='form-label'>Firstname</label>
          <input
            type='text'
            className='form-control'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className='mb-3'>
          <label className='form-label'>Lastname</label>
          <input
            type='text'
            className='form-control'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <button className='btn btn-primary' onClick={handleSubmit}>
          Save
        </button>
      </form>
    </div>
  );
};

export default AddStudent;
