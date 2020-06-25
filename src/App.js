import React, { useState } from 'react';
import { Button, Collapse, Grid, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { ReactComponent as ProgrammingSVG } from './images/programming.svg';

const useStyles = makeStyles(({ palette, spacing }) => {
  return {
    button: {
      marginBottom: spacing(5),
      marginLeft: spacing(2),
    },
    buttonGroup: {
      float: 'right',
    },
    container: {
      padding: spacing(4),
    },
    field: {
      marginBottom: spacing(2),
    },
    result: {
      backgroundColor: palette.secondary.light,
      padding: spacing(2),
    },
    svg: {
      height: 300,
      width: '100%',
    },
    title: {
      marginBottom: spacing(2),
    },
  };
});

export default function App() {
  const classes = useStyles();
  const [form, setForm] = useState({});
  const [result, setResult] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleReset = () => {
    setForm({});
    setResult(null);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Replace endpoint, body, and headers if needed
    // The "form" variable contains all form values
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    });

    setResult(await response.json());
  };

  const fieldProps = {
    className: classes.field,
    fullWidth: true,
    onChange: handleChange,
    required: true, // Remove if all fields aren't required
    variant: 'outlined',
  };

  return (
    <Grid
      alignItems='center'
      className={classes.container}
      container
      justify='center'
    >
      <Grid item md={4}>
        <ProgrammingSVG className={classes.svg} />
        <Typography
          align='center'
          className={classes.title}
          color='primary'
          component='h1'
          variant='h2'
        >
          Test Form
        </Typography>
        <form onSubmit={handleSubmit}>
          {/* Add more fields if needed */}
          <TextField
            label='User ID'
            name='userId'
            value={form.userId || ''}
            {...fieldProps}
          />
          <div className={classes.buttonGroup}>
            <Button
              className={classes.button}
              onClick={handleReset}
              type='button'
              variant='contained'
            >
              Reset
            </Button>
            <Button
              className={classes.button}
              color='primary'
              // Comment out next line if you don't care about form being filled
              // disabled={Object.values(form).every((val) => typeof val === 'undefined' || val === '')}
              type='submit'
              variant='contained'
            >
              Submit
            </Button>
          </div>
        </form>
      </Grid>
      <Grid item md={12} />
      <Grid item md={8}>
        <Collapse in={!!result}>
          <Typography className={classes.result} component='pre'>
            {JSON.stringify(result, undefined, 2)}
          </Typography>
        </Collapse>
      </Grid>
    </Grid>
  );
};