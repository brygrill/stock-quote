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

const Signup = () => {
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <Section>
      <Paper className={classes.paper}>
        <Typography variant="h2">Sign Up</Typography>
        <form onSubmit={formik.handleSubmit} className={classes.form}>
          <TextField
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            label="Email"
            fullWidth
            className={classes.input}
          />
          <TextField
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            label="Password"
            fullWidth
            className={classes.input}
          />
          <Button
            color="primary"
            variant="contained"
            size="medium"
            className={classes.button}
          >
            Sign up
          </Button>
        </form>
      </Paper>
    </Section>
  );
};

export default Signup;
