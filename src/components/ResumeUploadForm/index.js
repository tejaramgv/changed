import React from 'react';
import { useFormik } from 'formik';
import { Container, Typography, Button } from '@mui/material';

const ResumeUploadForm = ({ onSubmit, onPrev }) => {
  const formik = useFormik({
    initialValues: {
      resume: null,
    },
    validate: (values) => {
      const errors = {};
      if (!values.resume) {
        errors.resume = 'Required';
      }
      return errors;
    },
    onSubmit: (values) => {
      onSubmit(values);
    },
  });
  const submit=()=>
  onSubmit(formik.initialValues)

  const handleFileChange = (event) => {
    formik.setFieldValue('resume', event.currentTarget.files[0]);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h5" gutterBottom>
        Upload Resume/CV
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <input
          id="resume"
          name="resume"
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleFileChange}
        />
        <Button variant="outlined" onClick={onPrev}>
          Previous
        </Button>
        <Button onClick={submit} type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default ResumeUploadForm;
