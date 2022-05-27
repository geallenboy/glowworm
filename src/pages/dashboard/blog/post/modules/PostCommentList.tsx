import { Box, List } from '@mui/material';

import PostCommentItem from './PostCommentItem';

export default function PostCommentList({ post }: any) {
  const { comments } = post;

  return (
    <List disablePadding>
      {comments.map((comment: any) => {
        const { id, replyComment, users } = comment;
        const hasReply = replyComment.length > 0;

        return (
          <Box key={id} sx={{}}>
            <PostCommentItem
              name={comment.name}
              avatarUrl={comment.avatarUrl}
              postedAt={comment.postedAt}
              message={comment.message}
            />
            {hasReply &&
              replyComment.map((reply: any) => {
                const user = users.find((user: any) => user.id === reply.userId);
                return (
                  <PostCommentItem
                    key={reply.id}
                    message={reply.message}
                    tagUser={reply.tagUser}
                    postedAt={reply.postedAt}
                    name={user.name}
                    avatarUrl={user.avatarUrl}
                    hasReply
                  />
                );
              })}
          </Box>
        );
      })}
    </List>
  );
}
