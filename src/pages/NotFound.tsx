
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material'; 
import logo from '../assets/logo.png';

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/'); 
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh', 
        backgroundSize: 'cover',
        color: 'white',
        textAlign: 'center',
        padding: '0px',
      }}
    >
      <img 
            src={logo} 
            alt="Logo" 
            style={{ width: '100px', height: '100px', position: 'relative' }} 
          />
      <Typography variant="h1" fontSize="6rem" fontWeight="bold">
        404
      </Typography>
      <Typography variant="h5" gutterBottom>
        Página no encontrada
      </Typography>
      
      <Typography variant="body1" sx={{ maxWidth: '600px', margin: '0 auto', marginBottom: '20px' }}>
        Lo sentimos, la página que estás buscando no existe. 
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={handleGoHome}
        sx={{ padding: '10px 20px', fontSize: '16px' }}
      >
        Volver a la página de inicio
      </Button>
    </Box>
  );
};

export default NotFound;
