import React, { useState } from 'react';
import './App.css';

const Form = () => {
  const [formData, setFormData] = useState({ name: '', email: '', });

  const [submittedData, setSubmittedData] = useState([]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({...prevFormData,[name]: value,}));
  };

  const Submit = (e) => {
    e.preventDefault();
    if (validateEmail(formData.email)) {
      const newData = { ...formData, id: Date.now() };
      setSubmittedData([...submittedData, newData]);
      setFormData({ name: '', email: '', });
      showAlert();
    } else {
      alert('Invalid email address');
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const showAlert = () => {
    alert('Form Data:\nName: ' + formData.name + '\nEmail: ' + formData.email);
  };

  return (
    <div className="formcon">
      <center>
      <form onSubmit={Submit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name}  onChange={onChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={onChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
      </center>

      <div className="realtimecon">
        <h2>Real-Time Form Data</h2>
        <p>Name: {formData.name}</p>
        <p>Email: {formData.email}</p>
      </div>

      <div className="tablecon">
        <h2>Entered Form Data</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {submittedData.map((data) => (
              <tr key={data.id}>
                <td>{data.name}</td>
                <td>{data.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Form;