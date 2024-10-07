
import {Post} from '../Interfaces/Post.ts'

export interface CreatePostModalProps {
    open: boolean;
    onClose: () => void;
    onPostCreated: (newPost: Post) => void;  
  }