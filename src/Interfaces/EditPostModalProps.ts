
import {Post} from '../Interfaces/Post.ts'

export interface EditPostModalProps {
    open: boolean;
    onClose: () => void;
    post: Post | null;
    onPostUpdated: (updatedPost: Post) => void;  
  }
  