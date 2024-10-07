import React, { useState, useEffect } from 'react';
import NotificationAlertGeneral from '../Components/Toasts/NotificationAlertGeneral.tsx';
import { editPost } from '../api/auth'; 
import { Modal, Box, Button, TextField, Typography,  CircularProgress  } from '@mui/material';
import { EditPostModalProps } from '../Interfaces/EditPostModalProps'; 

 
const EditPostModal: React.FC<EditPostModalProps> = ({ open, onClose, post, onPostUpdated }) => {
    const [title, setTitle] = useState(post.title || '');
    const [description, setDescription] = useState(post.description || '');
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>('success');
    const [isLoading, setIsLoading] = useState(false);  
  
    useEffect(() => { 
      setTitle(post.title || '');
      setDescription(post.description || '');
    }, [post, onPostUpdated]); 
  
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setIsLoading(true); 
      try {
          if(post.id<100){ 
              const updatedPost = await editPost(post.id, { title, description });
            onPostUpdated(updatedPost);  
            setSnackbarMessage('Post editado exitosamente');
            setSnackbarSeverity('success');
            setSnackbarOpen(true);
            setTimeout(() => {
              onClose();   
            }, 1200);
            // Esta parte se realiza 'hardcodeado' ya que la API :  cuando uno crea luego, no puede editarla por API  ya que solo permite 100 ids, aunque se cree no se puede post una nueva en la api. ya que es una api modelo.
            // Por eso en Api realizo un contador de id (desde 100)
        } else if(post.id>100) {  
                const updatedPost = { ...post, title, description }; 
                onPostUpdated(updatedPost); 
                setSnackbarMessage('Post editado exitosamente');
                setSnackbarSeverity('success');
                setSnackbarOpen(true);
                setTimeout(() => {
                  onClose();   
                }, 1200);
        }
      } catch (error) {
        console.error('Error updating post:', error); 
        setSnackbarMessage('No se puede editar un post nuevo');
        setSnackbarSeverity('error');
        setSnackbarOpen(true); 
        onClose();  
      } finally {
        setIsLoading(false); 
        setTimeout(() => {
            setSnackbarOpen(false);
        }, 4000);
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
              Edit Post
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
                {isLoading ? <CircularProgress size={40} color="inherit" />:  'Update Post'}
              </Button>
            </form>
          </Box>
        </Modal> 
        <NotificationAlertGeneral  condition={snackbarOpen} message={snackbarMessage} severity={snackbarSeverity} />
      
      </>
    );
  };
  
  export default EditPostModal;