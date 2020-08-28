import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

function Copyright() {
  return (
    <Typography variant="body2" color='#BCCCDC'>
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Boing Boing
      </Link>{' '}
      {new Date().getFullYear()}
     
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '20vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? '#102A43' : theme.palette.grey[800],
      color: '#BCCCDC'
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
  
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1">Boing Boing - Your single shop for getting a B2B Product Demo </Typography>
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}