import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';



function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}


class CustomizedSnackbars extends React.Component {
  state = {
    open: false
  }

  handleClick = () => {
    this.setState({
      open: true
    })
  };




  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
     this.setState({
      open: false
    })
  };

  render() {
    return (
       <div>
        
        <Snackbar open={this.state.open} autoHideDuration={3000} onClose={this.handleClose}>
          <Alert onClose={this.handleClose} severity="success">
            Demo request setup succesfully. Share the tool <a href='#'> with your friends</a>
          </Alert>
        </Snackbar>
        </div>
    )
  }
}


export default CustomizedSnackbars;