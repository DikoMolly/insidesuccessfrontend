import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import successlogo from "../assets/successlogo.png";


const Registration = () => {
  const [formData, setFormData] = useState({
    businessName: '',
    email: '',
    businessType: '',
    businessDescription: '',
    portfolio: null,
    password:''
  });

  const [error, setError] = useState('');
  const navigate = useNavigate(); // Using useNavigate instead of useHistory

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, portfolio: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataObj = new FormData();
    formDataObj.append('businessName', formData.businessName);
    formDataObj.append('email', formData.email);
    formDataObj.append('password', formData.password);
    formDataObj.append('businessType', formData.businessType);
    formDataObj.append('businessDescription', formData.businessDescription);
    formDataObj.append('portfolio', formData.portfolio);

    try {
      const response = await axios.post('https://insidesuccessnigeria.onrender.com/auth/signup', formDataObj, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if (response.data.status === 'success') {
        navigate('/success'); // Navigate to success page on successful signup
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <div className='container'>
     
      <div className="content">
        <div className='formcontent'>
          <h2>Vendor Registration Portal</h2>
          <h3>Become a partner with Inside Success Nigeria</h3>
          <p>Join our network of esteemed vendors and showcase your business at upcoming events
             and through our advertising channels. Register now to connect with potential clients and grow your business.</p>
          <button className='join'>Join now</button>
        </div>
        <div className='forminput'>
          <div>
            <img src={successlogo} alt="Logo" className='logo' />
          </div>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="businessName">Business Name</label>
              <input type="text" name="businessName" placeholder='Business Name' onChange={handleInputChange} required />
            </div>
            <div>
              <label htmlFor="email">Email</label><br />
              <input type="email" name="email" placeholder='Example@gmail.com' onChange={handleInputChange} required />
            </div>
          
            <div>
              <label htmlFor="businessType">Business Type</label>
              <input type="text" name="businessType" placeholder='Business Type' onChange={handleInputChange} required />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder='Password' onChange={handleInputChange} required />
            </div>
            <div>
              <label htmlFor="businessDescription">Business Description</label>
              <input type="text" name="businessDescription" placeholder='Business Description' onChange={handleInputChange} required />
            </div>
            <div>
              <label htmlFor="portfolio">Upload Portfolio (PDF only) </label>
              <input type="file" name="portfolio" onChange={handleFileChange} required />
            </div>
            <div>
              <input type="submit" className='submit' value="Register" />
            </div>
          </form>
          {error && <p className="error">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default Registration;
