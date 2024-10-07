
import {Post} from '../Interfaces/Post.ts'

export interface PostsContainerProps {
    posts: Post[];
    userRole: string;
    handleEditClick: (post: Post) => void;
    handleDeleteClick: (post: Post) => void;
    handlePostCreated: (newPost: Post) => void;
    handlePostUpdated: (updatedPost: Post) => void;
    setEditModalOpen: (isOpen: boolean) => void; 
    editModalOpen:boolean;
    postToEdit:Post | null;
  }
  