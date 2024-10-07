
import { deletePost } from '../api/auth.tsx'; 
import { Post } from '../Interfaces/Post.ts';

const useHandlePost = (
    setPosts: React.Dispatch<React.SetStateAction<Post[]>>,
    setDeleteToast: React.Dispatch<React.SetStateAction<boolean>>, 
    setDeleteDialogOpen: React.Dispatch<React.SetStateAction<boolean>>,
    setPostSelect: React.Dispatch<React.SetStateAction<Post | null>>,
    setEditModalOpen: React.Dispatch<React.SetStateAction<boolean>>) => {


    const handleDeleteClick = (post: Post) => {
        setPostSelect(post);
        setDeleteDialogOpen(true);
    };

    const handlePostDelete = async (postToDelete: Post | null) => {
        if (postToDelete) {
            try {
                await deletePost(postToDelete.id);
                setPosts((prevPosts) => prevPosts.filter((post: Post) => post.id !== postToDelete.id));
                setDeleteToast(true);
            } catch (error) {
                console.error('Error deleting post:', error);
            } finally {
                setDeleteDialogOpen(false);
                setTimeout(() => {
                    setDeleteToast(false);
                }, 2400);
            }
        }
    };

    const handleCancelDelete = () => {
        setDeleteDialogOpen(false);
    };

    const handlePostCreated = async (newPost: Post) => {
        setPosts((prevPosts) => [newPost, ...prevPosts]);
    };

    const handlePostUpdated = async (updatedPost: Post) => {
        setPosts((prevPosts) => {
            const postExists = prevPosts.some((post) => post.id === updatedPost.id);
            if (postExists) {
                return prevPosts.map((post) =>
                    post.id === updatedPost.id ? updatedPost : post
                );
            } else {
                return [updatedPost, ...prevPosts];
            }
        });
    };

    const handleEditClick = (post: Post) => { 
        setPostSelect(post);
        setEditModalOpen(true);
    };

    return {
        handleDeleteClick,
        handlePostDelete,
        handleCancelDelete,
        handlePostCreated,
        handlePostUpdated,
        handleEditClick, 
    };
};

export default useHandlePost;
