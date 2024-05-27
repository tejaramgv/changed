



import React, { useState,useEffect,useContext } from 'react';
import { useParams,useLocation,Link } from 'react-router-dom';
import PersonalDetailsForm from '../PersonalDetailsForm';
import AddressDetailsForm from '../AddressDetailsForm';
import EducationForm from '../EducationForm';
import Mail from '../Mail';
import PreviewForm from '../PreviewForm';
import { LinearProgress, Step, StepLabel, Stepper, Typography } from '@mui/material';
import { AppContext } from '../AppContext';
import './Apply.css'
import '../../App.css'

const steps = ['Personal Details','OTP Verification', 'Address Details', 'Education', 'Preview'];

const Apply = (props) => {
  const location = useLocation();
  useEffect(() => {
document.title = `VAAJLABS${location.pathname}`;
}, []);
  const [state, setState] = useContext(AppContext);
  const { jobname } = useParams();
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({});

  const handleNext = (data) => {
    console.log(data)
    setFormData({ ...formData, ...data });
    setStep(step + 1);

  };
  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const handlePrev = () => {
    setStep(step - 1);
  };

  const handleSubmit = () => {
    // Implement your form submission logic here
    console.log(formData);
  };

  return (
    <>
   <div className="breadcrumbs-wrapper">
         <section className={`breadcrumbs ${!state?"home-sectionothers":"home-sectionothers-toggle"}`}>
      <div classame="container">

        <div className="header-logo">
       
        <h4 style={{color:"white"}}>Application Form</h4>
        <div className="logo_name"><div className="mark"><Link to="/"><img className="img" src="/img/tech.jpg" alt="" /></Link><span>&#174;</span></div></div>
        </div>

      </div>
    </section></div>
    <div className={`apply-form ${!state?"home-sectionothers":"home-sectionothers-toggle"}`}>
      <Stepper activeStep={step} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <LinearProgress variant="determinate" value={(step / (steps.length - 1)) * 100} />
      {/* <Typography variant="h5" gutterBottom style={{ marginTop: '20px' }}>
        {steps[step]}
      </Typography> */}
      <br/>
      <br/>
            {step === 1 && <Mail job={jobname} data={formData} onPrev={handlePrev} onNext={handleNext} />}

      {step === 0 && <PersonalDetailsForm data={formData} onNext={handleNext} />}
      {step === 2 && <AddressDetailsForm data={formData}  onNext={handleNext} onPrev={handlePrev} />}
      {step === 3 && <EducationForm data={formData} onNext={handleNext} onPrev={handlePrev} />}
      {step === 4 && <PreviewForm job={jobname} data={formData} onNext={handleNext}  onPrev={handlePrev} />}
    </div>
    </>
  );
};  

export default Apply;
