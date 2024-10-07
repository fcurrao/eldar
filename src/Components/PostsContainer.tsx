import React, { useState } from 'react';
import { Box, Grid, Button } from '@mui/material';
import PostComponent from '../Components/Post.tsx';
import CreatePostModal from '../Components/CreatePostModal.tsx';
import EditPostModal from '../Components/EditPostModal.tsx';
import { Post } from '../Interfaces/Post.ts';
import { PostsContainerProps } from '../Interfaces/PostsContainerProps.ts';

const PostsContainer: React.FC<PostsContainerProps> = ({
  posts,
  userRole,
  handleEditClick,
  handleDeleteClick,
  handlePostCreated,
  handlePostUpdated,
  editModalOpen,
  setEditModalOpen,
  postToEdit,
}) => {
  const [modalOpenCreate, setModalOpenCreate] = useState(false); 

  return (
    <> 
      {userRole === 'admin' && (
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <Button variant="contained" color="primary" onClick={() => setModalOpenCreate(true)}>
            Create Post
          </Button>
        </Box>
      )}
 
      <Box sx={{ padding: '20px' }}>
        <Grid container spacing={4}>
          {posts.map((post: Post) => (
            <Grid item key={post.id} xs={12} sm={6} md={3}>
              <PostComponent
                post={post}
                userRole={userRole}
                onEditClick={handleEditClick}
                onDeleteClick={handleDeleteClick}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
 
      <CreatePostModal
        open={modalOpenCreate}
        onClose={() => setModalOpenCreate(false)}
        onPostCreated={handlePostCreated}
      />
 
      {editModalOpen && (
        <EditPostModal
          open={editModalOpen}
          post={postToEdit}
          onClose={() => setEditModalOpen(false)}
          onPostUpdated={handlePostUpdated}
        />
      )}
    </>
  );
};

export default PostsContainer;
