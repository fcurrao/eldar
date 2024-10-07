
import { Box, Container, Typography, Link, Grid } from '@mui/material';

const Footer = () => {

    return (
        <Box
            component="footer"
            sx={{
                py: 3,
                px: 2,
                mt: 'auto',
                backgroundColor: '#282c34',
                color: 'white',
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" color="inherit" gutterBottom>
                            Eldar S.R.L.
                        </Typography>
                        <Typography variant="body2" color="inherit">
                            © 2024 Company. All rights reserved.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" color="inherit" gutterBottom>
                            Links
                        </Typography>
                        <Link href="/" color="inherit" underline="hover">
                            Home
                        </Link>{' '}
                        |{' '}
                        <Link href="https://eldars.com.ar/" target="_blank" rel="noopener noreferrer" color="inherit" underline="hover">
                            Eldar
                        </Link>{' '}
                    </Grid>
                    <Grid item xs={12} sm={4}>

                        <svg xmlns="http://www.w3.org/2000/svg" width='30' height='30' fill='white' viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" /></svg>

                        <Typography variant="body2" color="inherit">
                            Created by{' '}
                            <Link href="https://www.linkedin.com/in/federicocurrao/" target="_blank" rel="noopener noreferrer" color="inherit" underline="hover">
                                Fcurrao
                            </Link>
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Footer;
