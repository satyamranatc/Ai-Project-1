/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormGroup = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 1rem;
  text-align: left;
  width: 100%;
  margin:0 auto;
`;

const Label = styled.label`
  margin-bottom: 0.5rem;
  color: #1d8cf8;
`;

const Input = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  border: 2px solid #1d8cf8;
  border-radius: 4px;
  background-color: #333;
  color: #ffffff;
  margin-bottom: 0.5rem;
  width: 50%;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  background-color: #1d8cf8;
  color: #ffffff;
  cursor: pointer;
  width: 50%;
  margin: 1rem auto;
`;

const DataForm = ({ handleSubmit, handleChange, formData }) => {
  return (
    <div>
   <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Full Name</Label>
          <Input
            type="text"
            name="fullName"
            placeholder="John Doe"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Age</Label>
          <Input
            type="number"
            name="age"
            placeholder="Age (min: 0, max: 120)"
            value={formData.age}
            onChange={handleChange}
            min="0"
            max="120"
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Gender</Label>
          <Input
            type="number"
            name="gender"
            placeholder="Gender (0: Male, 1: Female)"
            value={formData.gender}
            onChange={handleChange}
            min="0"
            max="1"
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Heart Rate</Label>
          <Input
            type="number"
            name="heartRate"
            placeholder="Heart Rate (min: 40, max: 200)"
            value={formData.heartRate}
            onChange={handleChange}
            min="40"
            max="200"
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Systolic Blood Pressure</Label>
          <Input
            type="number"
            name="systolicBP"
            placeholder="Systolic Blood Pressure (min: 60, max: 250)"
            value={formData.systolicBP}
            onChange={handleChange}
            min="60"
            max="250"
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Diastolic Blood Pressure</Label>
          <Input
            type="number"
            name="diastolicBP"
            placeholder="Diastolic Blood Pressure (min: 30, max: 150)"
            value={formData.diastolicBP}
            onChange={handleChange}
            min="30"
            max="150"
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Blood Sugar</Label>
          <Input
            type="number"
            name="bloodSugar"
            placeholder="Blood Sugar (min: 50, max: 500)"
            value={formData.bloodSugar}
            onChange={handleChange}
            min="50"
            max="500"
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>CK-MB</Label>
          <Input
            type="number"
            name="ckMb"
            placeholder="CK-MB (min: 0.1, max: 20)"
            value={formData.ckMb}
            onChange={handleChange}
            min="0.1"
            max="20"
            step="0.1"
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Troponin</Label>
          <Input
            type="number"
            name="troponin"
            placeholder="Troponin (min: 0.001, max: 10)"
            value={formData.troponin}
            onChange={handleChange}
            min="0.001"
            max="10"
            step="0.001"
            required
          />
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default DataForm;