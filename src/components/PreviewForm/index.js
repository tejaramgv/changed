
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { ClipLoader } from 'react-spinners';
import { Container, Typography, Button, Grid } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import ReCAPTCHA from 'react-google-recaptcha';

import './PreviewForm.css'; // Import CSS for animation styles

const PreviewForm = ({ job, data, onPrev, onNext }) => {
  const {
    FirstName,
    LastName,
    MiddleName,
    Email,
    PhoneNo,
    selectedCountry,
    state,
    city,
    pincode,
    address,
    degree,
    fieldOfStudy,
    institutionName,
    location,
    graduationYear,
    gpa,
    resume,
  } = data;
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
  const history = useNavigate();
  const back=()=>history('/careers'); 

  const handleSubmit = async () => {
    setSubmitting(true); // Start the loading state

    const formData = new FormData();
    formData.append('jobname', job);
    formData.append('firstname', FirstName);
    formData.append('lastname', LastName);
    formData.append('middlename', MiddleName);
    formData.append('email', Email);
    formData.append('phoneno', PhoneNo);
    formData.append('selectedCountry', selectedCountry);
    formData.append('state', state);
    formData.append('city', city);
    formData.append('pincode', pincode);
    formData.append('address', address);
    formData.append('degree', degree);
    formData.append('fieldOfStudy', fieldOfStudy);
    formData.append('institutionname', institutionName);
    formData.append('location', location);
    formData.append('graduationyear', graduationYear);
    formData.append('gpa', gpa);
    formData.append('resume', resume);

    try {
      const res=await axios.post('https://changed.onrender.com/api/v1/auth/add',{Email,job})
      if(!res.data.success){
        toast.error("data not added")
        return;
      }
      const response = await axios.post('https://changed.onrender.com/api/v1/auth/apply', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if (response.data.success) {
        toast.success('Application submitted successfully');
        setSubmitting(false); // Stop the loading state
        setSubmitted(true);
      } else {
        toast.error(response.data.error || 'Something went wrong');
        setSubmitting(false); // Stop the loading state
      }
    } catch (error) {
      console.error('Error submitting application:', error);
      toast.error('Something went wrong!');
      setSubmitting(false); // Stop the loading state
    }
  };

  return (
    <Container maxWidth="sm">
      {!submitted ? (
        <div>
          <Typography variant="h5" gutterBottom style={{ padding: '10px 0 0 0', color: 'blue' }}>
            Preview
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1">
                <strong>Application For:</strong>
              </Typography>
              <Typography variant="body2">
                Applied For {job}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1">
                <strong>Personal Details:</strong>
              </Typography>
              <Typography variant="body2">
                First Name: {FirstName}
              </Typography>
              <Typography variant="body2">
                Last Name: {LastName}
              </Typography>
              <Typography variant="body2">
                Middle Name: {MiddleName}
              </Typography>
              <Typography variant="body2">
                Email: {Email}
              </Typography>
              <Typography variant="body2">
                Phone Number: {PhoneNo}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1">
                <strong>Address Details:</strong>
              </Typography>
              <Typography variant="body2">
                Country: {selectedCountry}
              </Typography>
              <Typography variant="body2">
                State: {state}
              </Typography>
              <Typography variant="body2">
                City: {city}
              </Typography>
              <Typography variant="body2">
                Pincode: {pincode}
              </Typography>
              <Typography variant="body2">
                Address: {address}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1">
                <strong>Education Details:</strong>
              </Typography>
              <Typography variant="body2">
                Degree/Certificate: {degree}
              </Typography>
              <Typography variant="body2">
                Field of Study/Major: {fieldOfStudy}
              </Typography>
              <Typography variant="body2">
                Institution Name: {institutionName}
              </Typography>
              <Typography variant="body2">
                Location: {location}
              </Typography>
              <Typography variant="body2">
                Graduation Year: {graduationYear}
              </Typography>
              <Typography variant="body2">
                GPA: {gpa}
              </Typography>
              <Typography variant="body2">
                Resume: {resume.name}
              </Typography>
            </Grid>
            <Grid>
            <ReCAPTCHA
            className="captcha"
            sitekey="6Lcewa4pAAAAAAU17wtRvHROv0COVcLCFircmr4z"
            onChange={() => setIsCaptchaVerified(true)}
          />
            </Grid>
          </Grid>
          <Button style={{ margin: '10px 0 0 0' }} variant="outlined" onClick={onPrev}>
            Previous
          </Button>
          <Button
            disabled={!isCaptchaVerified || submitting}
            style={{ margin: '10px 0 0 10px' }}
            variant="contained"
            color="primary"
            onClick={handleSubmit}
          >
            {submitting ? <ClipLoader color="white" size={17} /> : 'Submit'}
          </Button>
         
        </div>
      ) : (
        <CSSTransition in={submitted} timeout={2000} classNames="success-message" unmountOnExit>
         <div className="preview-submitted"> <div className="success-message">
            <center><DoneIcon style={{ fontSize: 64, color: 'green' }} /></center>
            <Typography variant="h6">Your application is submitted successfully!</Typography>
            <Button style={{ margin: '10px 0 0 0' }} variant="contained" onClick={back}>
            Back
          </Button>
          </div></div>
        </CSSTransition>
      )}
      <Toaster />
    </Container>
  );
};

export default PreviewForm;

