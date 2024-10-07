import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../redux/authSlice'; 
import NotificationAlertGeneral from '../Components/Toasts/NotificationAlertGeneral.tsx';
import { loginUser } from '../api/auth.tsx'; 
import { TextField, Button, Typography, Container, Box, Grid, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import logo from '../assets/logo.png';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);  
  const [errorMessage, setErrorMessage] = useState('');
  const [isError, setIsError] = useState(false); 
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { token, role } = await loginUser(username, password);
      dispatch(login({ role, token }));
      navigate('/home');
    } catch (error) {
      setErrorMessage('Credenciales inválidas');  
      setIsError(true);  
      console.error('Error during login:', error); 
      setTimeout(() => {
        setLoading(false);
        setIsError(false);  
      }, 2000);
    }
  };

  return (
    <Container 
      component="main" 
      maxWidth="xs" 
      style={{ 
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        padding: '0 16px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          border: '1px solid #ddd',
          borderRadius: '8px',
          padding: '2rem',
          boxShadow: 3,
          background: "linear-gradient(72deg, #5364a2fa, #504d6054)",
          width: '90%',
        }}
      >
        <Typography sx={{ display:'flex', alignItems:'center', fontFamily:'inherit', fontSize:'xxx-large',fontWeight:'600'}} variant="h4" component="h1" color="white" gutterBottom>
          <img 
            src={logo} 
            alt="Logo" 
            style={{ width: '100px', height: '100px', position: 'relative' }} 
          />
          Eldar
        </Typography>
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                fullWidth
                margin="normal"
                variant="outlined"
                InputProps={{
                  style: { color: 'black', backgroundColor: '#f0f0f0' },
                }}
                InputLabelProps={{
                  style: { color: '#62acf6ad', fontWeight: 'bold' },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
                margin="normal"
                variant="outlined"
                InputProps={{
                  style: { color: 'black', backgroundColor: '#f0f0f0' },
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(prev => !prev)}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}  
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                InputLabelProps={{
                  style: { color: '#62acf6ad', fontWeight: 'bold' },
                }}
              />
            </Grid>
          </Grid>
          <Button 
            sx={{ marginTop: '10px'}} 
            type="submit" 
            variant="contained" 
            color="primary" 
            fullWidth
            disabled={loading}  
          >
            {loading ? 'Credenciales inválidas' : 'Login'}
          </Button>
        </form>
      </Box>
      <NotificationAlertGeneral condition={isError} message={errorMessage} severity="error" />  
    </Container>
  );
};

export default Login;