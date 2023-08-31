import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './user.css';

const User = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    houseNumber: '',
    cityArea: '',
    cityName: '',
    state: '',
    country: '',
    pincode: ''
  });
  const navigate = useNavigate();

  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
     
    }));
  
  };

  const handleSubmit = event => {
    event.preventDefault();
    // Perform form validation here before proceeding
    if (
      formData.name &&
      formData.mobile &&
      formData.houseNumber &&
      formData.cityArea &&
      formData.cityName &&
      formData.state &&
      formData.country &&
      formData.pincode
    ) {

        console.log('User Details:', formData);
      // Validation passed, redirect to the login page
      navigate('/Login');
    } else {
      // Validation failed, show an error or take appropriate action
      console.log('Please fill in all the required fields.');
    }
  };

  return (
    <div className="user-details-container">
      <h1 className="form-input">User Details</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="Name"
            name="name"
            placeholder='Name'
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Mobile Number:</label>
          <input
            type="text"
            placeholder='Number'
            name="mobile"
            value={formData.mobile}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>House Number:</label>
          <input
            type="text"
            placeholder='H-Number'
            name="houseNumber"
            value={formData.houseNumber}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>City Area:</label>
          <input
            type="text"
            placeholder='City Area'
            name="cityArea"
            value={formData.cityArea}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>City Name:</label>
          <input
            type="text"
            placeholder='City Name'
            name="cityName"
            value={formData.cityName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>State:</label>
          <input
            type="text"
            placeholder='State'
            name="state"
            value={formData.state}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Country:</label>
          <input
            type="text"
            placeholder='Country'
            name="country"
            value={formData.country}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Pincode:</label>
          <input
            type="text"
            placeholder='Pin Code'
            name="pincode"
            value={formData.pincode}
            onChange={handleInputChange}
            required
          />
        </div>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </form>
      <div className="user-details-actions">
        <Link to="/payment">
          <Button variant="outline-secondary">Back to Payment Details</Button>
        </Link>
      </div>
    </div>
  );
};

export default User;




/*import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './user.css';

const User = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    houseNumber: '',
    cityArea: '',
    cityName: '',
    state: '',
    country: '',
    pincode: ''
  });

  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    // You can perform validation and further actions here
    console.log(formData);
  };

  return (
    <div className="user-details-container">
      <h1 className='form-input'>User Details</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label>Mobile Number:</label>
          <input type="tel" name="mobile" value={formData.mobile} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label>House Number:</label>
          <input type="text" name="houseNumber" value={formData.houseNumber} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label>City Area:</label>
          <input type="text" name="cityArea" value={formData.cityArea} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label>City Name:</label>
          <input type="text" name="cityName" value={formData.cityName} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label>State:</label>
          <input type="text" name="state" value={formData.state} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label>Country:</label>
          <input type="text" name="country" value={formData.country} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label>Pincode:</label>
          <input type="text" name="pincode" value={formData.pincode} onChange={handleInputChange} required />
        </div>
        <Link to="/Login">
        <Button variant="primary" type="submit">Submit</Button>
        </Link>
      </form>
      <div className="user-details-actions">
        <Link to="/payment">
          <Button variant="outline-secondary">Back to Payment Details</Button>
        </Link>
      </div>
    </div>
  );
};

export default User;
*/