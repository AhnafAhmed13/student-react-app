import { useState } from 'react';

export const SubmitStudentPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [major, setMajor] = useState('');
  const [school, setSchool] = useState('');

  // 1. add onChange handlers to each input to update the state
  // 2. add onSubmit handler to the form to submit the data

  return (
    <form>
      <input type="text" placeholder="First Name" />
      <input type="text" placeholder="Last Name" />
      <input type="text" placeholder="Major" />
      <input type="text" placeholder="School" />
      <button type="submit">Submit</button>
    </form>
  );
};
