import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout, login } from '../redux/authSlice.ts';
import useHandlePost from '../Hooks/useHandlePost.ts';
import Footer from '../Components/Generals/Footer.tsx';
import TopBar from '../Components/Generals/Topbar.tsx';
import { fetchPosts } from '../api/auth.tsx';
import PostsContainer from '../Components/PostsContainer.tsx';
import { Post } from '../Interfaces/Post.ts';
import AlertsContainer from '../Components/AlertsContainer.tsx';
import '../App.css';

const Home: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [postSelect, setPostSelect] = useState<Post | null>(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [deleteToast, setDeleteToast] = useState(false);  
  const [editModalOpen, setEditModalOpen] = useState(false);
  const { user } = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { handleDeleteClick, handlePostDelete, handleCancelDelete, handlePostCreated, handlePostUpdated, handleEditClick } = useHandlePost(setPosts, setDeleteToast, setDeleteDialogOpen, setPostSelect, setEditModalOpen);
  
  useEffect(() => {
    const userLocal = localStorage.getItem('role');
    const tokenLocal = localStorage.getItem('token');
    if (!user.role && userLocal && tokenLocal) {
      dispatch(login({ role: userLocal, token: tokenLocal }));
    }
    if (user || userLocal) {
      setIsLoggedIn(true);
      setTimeout(() => {
        localStorage.setItem('notoficationInit', 'true');
      }, 4000);
    }
  }, [user]);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      const getPosts = async () => {
        try {
          const data = await fetchPosts();
          setPosts(data);
        } catch (error) {
          console.error(error);
        } finally {
          setIsLoading(false);
        }
      };
      getPosts();
    }, 2000);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('role');
    localStorage.removeItem('token');
    localStorage.removeItem('notoficationInit');
    dispatch(logout());
    navigate('/login');
  };

  return (
    <div>
      {/* AlertsContainer */}
      <AlertsContainer
        isLoading={isLoading}
        isLoggedIn={isLoggedIn}
        userRole={user.role}
        deleteDialogOpen={deleteDialogOpen}
        postToDelete={postSelect}
        deleteToast={deleteToast}
        handleCancelDelete={handleCancelDelete}
        handlePostDelete={handlePostDelete}
      />

      {/* home */}
      <TopBar user={user} handleLogout={handleLogout} />

      <PostsContainer
        posts={posts}
        userRole={user.role}
        handleEditClick={handleEditClick}
        handleDeleteClick={handleDeleteClick}
        handlePostCreated={handlePostCreated}
        handlePostUpdated={handlePostUpdated}
        editModalOpen={editModalOpen}
        postToEdit={postSelect}
        setEditModalOpen={setEditModalOpen}
      />

      <Footer />
    </div>
  );
};

export default Home;
