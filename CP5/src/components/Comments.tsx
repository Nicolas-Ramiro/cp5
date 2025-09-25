import React from 'react';

interface Comment {
  name: string;
  text: string;
}

interface CommentsProps {
  comments: Comment[];
}

const Comments: React.FC<CommentsProps> = ({ comments }) => {
  return (
    <div className="mt-8">
      <h3 className="text-lg font-semibold mb-4">Comments</h3>
      {comments.length === 0 ? (
        <p>No comments yet.</p>
      ) : (
        <ul>
          {comments.map((comment, index) => (
            <li key={index} className="mb-4 border-b pb-2">
              <p className="font-bold">{comment.name}</p>
              <p>{comment.text}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Comments;
