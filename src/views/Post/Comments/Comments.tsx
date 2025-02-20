import { useCommentModel } from 'models/useCommentModel';
import { Heading } from 'components/Heading/Heading';
import { Paragraph } from 'components/Paragraph/Paragraph';
import './comments.scss';

interface ICommentProps {
  postId: string;
  email?: string;
  body?: string;
  name?: string;
  id?: number;
}

export const Comments = (props: ICommentProps) => {
  const { data, isLoading } = useCommentModel([], `?postId=${props.postId}`);

  const getInitials = (name: string = '') => {
    return name
      .split(' ')
      .map((word) => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  if (isLoading) {
    return (
      <div className="comments-loading">
        <div className="loading-spinner"></div>
        <Paragraph variant="Regular">Loading comments...</Paragraph>
      </div>
    );
  }

  return (
    <div className="comments-container">
      {data?.map((comment: ICommentProps) => (
        <div key={comment.id} className="comment-card">
          <div className="comment-header">
            <div className="avatar">{getInitials(comment.name)}</div>
            <div className="user-info">
              <Heading variant="H5" className="user-name">
                {comment.name}
              </Heading>
              <a href={`mailto:${comment.email}`} className="user-email">
                {comment.email}
              </a>
            </div>
          </div>
          <div className="comment-body">
            <Paragraph variant="Regular">{comment.body}</Paragraph>
          </div>
          <div className="comment-actions">
            <button className="action-button">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M7 11V7a5 5 0 0110 0v4M5 15h14l1 5H4l1-5zm0 0V11h14v4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Reply
            </button>
            <button className="action-button">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3H14z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Like
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
