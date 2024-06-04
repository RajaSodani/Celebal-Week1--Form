import React from 'react';
import { useLocation } from 'react-router-dom';
const Success = () => {
  const location = useLocation();
  const { formData } = location.state || {};

  if (!formData) {
    return <p>No data available. Please submit the form first.</p>;
  }

  return (
    <div class='sucess-div'>
        <div>
          <h2>Form Submission Successful</h2>
          <ul>
              <li >First Name: {formData.firstName}</li>
              <li>Last Name: {formData.lastName}</li>
              <li>Username: {formData.username}</li>
              <li>Email: {formData.email}</li>
              <li>Phone No.: {formData.phoneNo}</li>
              <li>Country: {formData.country}</li>
              <li>CountryCode: {formData.countryCode}</li>
              <li>City: {formData.city}</li>
              <li>Pan No.: {formData.panNo}</li>
              <li>Aadhar No.: {formData.aadharNo}</li>
          </ul>
        </div>
    </div>
  );
};

export default Success;
