
import {Post} from './Post.ts'

export interface AlertsContainerProps {
    isLoading: boolean;
    isLoggedIn: boolean;
    userRole: string;
    deleteDialogOpen: boolean;
    postToDelete: Post | null;
    deleteToast: boolean;
    handleCancelDelete: () => void;
    handlePostDelete: (post: Post | null) => void;
  }