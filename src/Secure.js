import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { ReactComponent as SecureSVG } from './images/secure.svg';

const useStyles = makeStyles(({ spacing }) => {
  return {
    button: {
      marginBottom: spacing(5),
      marginLeft: spacing(2),
    },
    container: {
      padding: spacing(4),
    },
    svg: {
      height: 300,
      width: '100%',
    },
    title: {
      marginBottom: spacing(4),
    },
  };
});

const AUTH_TOKEN = 'insert_token_here';

export default function Secure() {
  const classes = useStyles();
  const [auth, setAuth] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const getAuthStatus = async () => {
      const authResponse = await fetch('/api/cc-node-verify', {
        method: 'POST',
        body: JSON.stringify({
          idToken: null,
        }),
        headers: {
          'Authorization': AUTH_TOKEN,
          'Content-type': 'application/json; charset=UTF-8',
        },
      });

      console.log(authResponse);

      if (!(await authResponse())) {
        setAuth(false);
        history.push('/');
      }

      if (await authResponse()) {
        setAuth(true);
      }
    };

    getAuthStatus();
  }, [auth, history]);

  const handleSubmit = () => null;

  return (
    <Grid
      alignItems='center'
      className={classes.container}
      container
      justify='center'
    >
      <Grid item md={4}>
        <SecureSVG className={classes.svg} />
        <Typography
          align='center'
          className={classes.title}
          color='primary'
          component='h1'
          variant='h2'
        >
          Strong Door
        </Typography>
        <form onSubmit={handleSubmit}>
          <Button
            className={classes.button}
            color='primary'
            fullWidth
            // Comment out next line if you don't care about form being filled
            // disabled={Object.values(form).every((val) => typeof val === 'undefined' || val === '')}
            type='submit'
            variant='contained'
          >
            Break the Internet
          </Button>
        </form>
      </Grid>
    </Grid>
  );
};