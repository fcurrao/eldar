 
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { Post as PostType } from '../Interfaces/Post.ts';

interface PostProps {
  post: PostType;
  userRole: string;
  onEditClick: (post: PostType) => void;
  onDeleteClick: (post: PostType) => void;
}

const Post: React.FC<PostProps> = ({ post, userRole, onEditClick, onDeleteClick }) => {
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        boxShadow: 3,
        borderRadius: '12px',
        transition: 'transform 0.2s',
        '&:hover': {
          transform: 'scale(1.03)',
        },
      }}
    >
      <CardMedia
        component="img"
        height="140"
        image={`https://picsum.photos/id/${post.id}/200/140`}
        alt={post.title}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h6" component="div">
          {post.title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {post.description || 'No description available.'}
        </Typography>
      </CardContent>
      {userRole === 'admin' && (
        <>
          <Button
            variant="contained"
            color="primary"
            sx={{ margin: '5px' }}
            onClick={() => onEditClick(post)}
          >
            Edit Post
          </Button>
          <Button
            variant="contained"
            color="secondary"
            sx={{ margin: '5px' }}
            onClick={() => onDeleteClick(post)}
          >
            Delete Post
          </Button>
        </>
      )}
    </Card>
  );
};

export default Post;
