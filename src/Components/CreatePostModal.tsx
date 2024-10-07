import React, { useState } from 'react'; 
import NotificationAlertGeneral from '../Components/Toasts/NotificationAlertGeneral';
import { createPost } from '../api/auth';  
import { Modal, Box, Button, TextField, Typography, CircularProgress } from '@mui/material';
import { CreatePostModalProps } from '../Interfaces/CreatePostModalProps';  

const CreatePostModal: React.FC<CreatePostModalProps> = ({ open, onClose, onPostCreated }) => {
    const [title, setTitle] = useState(''); 
    const [description, setDescription] = useState('');
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>('success');
    const [isLoading, setIsLoading] = useState(false);
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setIsLoading(true);
      try {
        const newPost = await createPost({ title, description }); 
        onPostCreated(newPost);
        onClose();
        setTitle('');
        setDescription(''); 
        setSnackbarMessage('Post creado exitosamente');
        setSnackbarSeverity('success');
        setSnackbarOpen(true);
      } catch (error) {
        console.error('Error creating post:', error);
        setSnackbarMessage('No se pudo crear el post');
        setSnackbarSeverity('error');
        setSnackbarOpen(true);
      } finally {
        setIsLoading(false);
        setTimeout(() => {
          setSnackbarOpen(false);
        }, 1200);
      }
    };
    
  
    return (
        <>
            <Modal open={open} onClose={onClose}>
                <Box
                    sx={{
                        width: 300,
                        bgcolor: 'background.paper',
                        p: 4,
                        borderRadius: 2,
                        boxShadow: 24,
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                    }}
                >
                    <Typography variant="h6" gutterBottom>
                        Create New Post
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            label="Title"
                            variant="outlined"
                            fullWidth
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            sx={{ mb: 2 }}
                            required
                        />
                        <TextField
                            label="Description"
                            variant="outlined"
                            fullWidth
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            sx={{ mb: 2 }}
                            required
                        />
                        <Button variant="contained" color="primary" type="submit" disabled={isLoading}>
                            {isLoading ? <CircularProgress size={24} color="inherit" /> : 'Create Post'}
                        </Button>
                    </form>
                </Box>
            </Modal>
             
            <NotificationAlertGeneral condition={snackbarOpen} message={snackbarMessage} severity={snackbarSeverity} />
        </>
    );
};
  
export default CreatePostModal;
