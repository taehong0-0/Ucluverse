import React, { ReactElement } from 'react';
import { CommentContainer } from './style';

// interface props {
//   post: Post;
// }
// interface Post {
//   title: string;
//   content: string;
//   time: string;
//   boardName: string;
//   likeNum: number;
//   isLike: boolean;
//   comment: any[];
// }

function PostComment(): ReactElement {
  return <CommentContainer />;
}
export default PostComment;
