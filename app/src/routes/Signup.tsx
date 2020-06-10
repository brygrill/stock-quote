import React from 'react';
import Section from '../components/Section';
import { TextField, Typography, Paper, Button } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { useFormik } from 'formik';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      marginTop: '2rem',
      padding: '3rem',
    },
    form: {
      padding: '1rem 0',
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'column',
    },
    input: {
      margin: '1rem 0',
    },
    button: {
      margin: '2rem 0 1rem 0',
    },
  }),
);

const formFields = [
  {
    name: 'firstName',
    type: 'text',
    label: 'First Name',
  },
  {
    name: 'lastName',
    type: 'text',
    label: 'Last Name',
  },
  {
    name: 'email',
    type: 'email',
    label: 'Email',
  },
  {
    name: 'password',
    type: 'password',
    label: 'Password',
  },
];

const validate = (values: {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}) => {
  const errors = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };

  if (values.firstName.length > 15) {
    errors.firstName = 'Must be 15 characters or less';
  }

  if (values.lastName.length > 20) {
    errors.lastName = 'Must be 20 characters or less';
  }

  if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (values.password && values.password.length < 16) {
    errors.password = 'Password too short!';
  }

  return errors;
};

const Signup = () => {
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <Section>
      <Paper className={classes.paper}>
        <Typography variant="h2">Sign Up</Typography>
        <form onSubmit={formik.handleSubmit} className={classes.form}>
          {formFields.map(({ name, type, label }) => (
            <TextField
              key={name}
              id={name}
              name={name}
              type={type}
              onChange={formik.handleChange}
              // @ts-ignore
              value={formik.values[name]}
              label={label}
              fullWidth
              // @ts-ignore
              error={!!formik.errors[name]}
              // @ts-ignore
              helperText={formik.errors[name]}
              className={classes.input}
            />
          ))}
          <Button
            color="primary"
            variant="contained"
            size="medium"
            className={classes.button}
            type="submit"
          >
            Sign up
          </Button>
        </form>
      </Paper>
    </Section>
  );
};

export default Signup;
