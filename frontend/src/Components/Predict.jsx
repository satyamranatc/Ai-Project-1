/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Predict.css';

const Predict = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    gender: '',
    heartRate: '',
    systolicBP: '',
    diastolicBP: '',
    bloodSugar: '',
    ckMb: '',
    troponin: '',
  });

  const [userList, setUserList] = useState([]);
  const [predictionResult, setPredictionResult] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('/api/userData');
        setUserList(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Save patient data to Express backend
      const response = await axios.post('/api/predictions', formData);
      console.log('Patient data saved:', response.data);

      // Now make a request to Flask server for prediction
      const mlResponse = await axios.post('/fapi/predict', formData);
      console.log('Prediction:', mlResponse.data);
      // setPredictionResult(mlResponse.data); // Assuming the prediction data is a string
    } catch (error) {
      console.error('Error:', error);
    }
  };


  return (
    <div className="Container">
      <div className="Sidebar">
        <h2 className="SidebarTitle">User List</h2>
        <ul className="SidebarList">
          {userList.map((user, index) => (
            <li className="SidebarItem" key={index}>{user.fullName}</li> 
          ))}
        </ul>
      </div>
      <div className="Content">
        <div className="FormContainer">
          <h1>Predict Heart Attack</h1>
          <form onSubmit={handleSubmit} className="Form">
            <div>
              <label className="Label">Full Name</label>
              <input
                type="text"
                name="fullName"
                placeholder="John Doe"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="Input"
              />
            </div>
             <div className="FormGroup">
              <label className="Label">Age</label>
              <input
                type="number"
                name="age"
                placeholder="Age (min: 0, max: 120)"
                value={formData.age}
                onChange={handleChange}
                min="0"
                max="120"
                required
                className="Input"
              />
            </div>
            <div className="FormGroup">
              <label className="Label">Gender</label>
              <input
                type="number"
                name="gender"
                placeholder="Gender (0: Male, 1: Female)"
                value={formData.gender}
                onChange={handleChange}
                min="0"
                max="1"
                required
                className="Input"
              />
            </div>
            <div className="FormGroup">
              <label className="Label">Heart Rate</label>
              <input
                type="number"
                name="heartRate"
                placeholder="Heart Rate (min: 40, max: 200)"
                value={formData.heartRate}
                onChange={handleChange}
                min="40"
                max="200"
                required
                className="Input"
              />
            </div>
            <div className="FormGroup">
              <label className="Label">Systolic Blood Pressure</label>
              <input
                type="number"
                name="systolicBP"
                placeholder="Systolic Blood Pressure (min: 60, max: 250)"
                value={formData.systolicBP}
                onChange={handleChange}
                min="60"
                max="250"
                required
                className="Input"
              />
            </div>
            <div className="FormGroup">
              <label className="Label">Diastolic Blood Pressure</label>
              <input
                type="number"
                name="diastolicBP"
                placeholder="Diastolic Blood Pressure (min: 30, max: 150)"
                value={formData.diastolicBP}
                onChange={handleChange}
                min="30"
                max="150"
                required
                className="Input"
              />
            </div>
            <div className="FormGroup">
              <label className="Label">Blood Sugar</label>
              <input
                type="number"
                name="bloodSugar"
                placeholder="Blood Sugar (min: 50, max: 500)"
                value={formData.bloodSugar}
                onChange={handleChange}
                min="50"
                max="500"
                required
                className="Input"
              />
            </div>
            <div className="FormGroup">
              <label className="Label">CK-MB</label>
              <input
                type="number"
                name="ckMb"
                placeholder="CK-MB (min: 0.1, max: 20)"
                value={formData.ckMb}
                onChange={handleChange}
                min="0.1"
                max="20"
                step="0.1"
                required
                className="Input"
              />
            </div>
            <div className="FormGroup">
              <label className="Label">Troponin</label>
              <input
                type="number"
                name="troponin"
                placeholder="Troponin (min: 0.001, max: 10)"
                value={formData.troponin}
                onChange={handleChange}
                min="0.001"
                max="10"
                step="0.001"
                required
                className="Input"
              />
            </div>
            <button type="submit" className="Button">Submit</button>
          </form>
          {/* Display prediction result */}
          {predictionResult && <p>Prediction Result: {predictionResult}</p>}
        </div>
      </div>
    </div>
  );
};

export default Predict;