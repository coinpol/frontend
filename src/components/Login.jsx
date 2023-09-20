import React from 'react';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography, TextField, Button} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { loginFailure,loginSuccess  } from '../reducers/adminReducer.js';

import { useNavigate  } from 'react-router-dom';
import axios from 'axios'
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor:'#371213',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  paper: {
    padding: theme.spacing(3),
    maxWidth: 400,
    margin: '0 auto',
  },
  button:{
    backgroundColor:'#371213',
    color:"white    "
  }
}));



  


 const Login = () => {
    const navigate = useNavigate ();


    const dispatch = useDispatch();

    const classes = useStyles();
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
   const [loginError,setLoginError]= useState('');

    const handleLogin = async () => {




    if ( !email.trim() || !password.trim()){
        console.log("hhhh")
   setLoginError("Empty fields")
}else{  
    
    
try {
  
    const response = await axios.post('   http://localhost:5000/api/login', {
        email,
        password,
      });

    if (response.status === 200) {
      dispatch(loginSuccess(response.data));
      navigate('/'); 
    } else {
      dispatch(loginFailure('Login failed. Please check your credentials.'));
    } 
  } catch (error) {
    dispatch(loginFailure( error.response.data.message));
    if (error.response) {
        // Server responded with a status other than 200
       setLoginError(error.response.data.message)
      }
  }
};}
   




  return (


    <div className={classes.root}>
    <Paper className={classes.paper}>
      <Typography variant="h5" gutterBottom>
        Login
      </Typography>
      <TextField
        label="Email"
        fullWidth
        
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        margin="normal"
        required
      />
            {!email.trim()?<p style={{ color: 'red' }}>{loginError}</p>:<></>}
      <TextField
        label="Password"
        fullWidth
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        margin="normal"
        required
      />
         {!password.trim()?<p style={{ color: 'red' }}>{loginError}</p>:<></>}
     
      <Button
       className={classes.button}
        variant="contained"
        
        fullWidth
        onClick={handleLogin}

      >
        Login
      </Button>
    </Paper>
  </div>
  )
}

export default Login