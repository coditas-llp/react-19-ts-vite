import { IPostModelProps, usePostsModel } from 'models/usePostsModel';
import { useState } from 'react';
import { Comments } from './Comments/Comments';
import './posts.scss';
import { Button } from 'components/Button/Button';
import { Heading } from 'components/Heading/Heading';
import { Paragraph } from 'components/Paragraph/Paragraph';
import { useNavigate } from 'react-router-dom';
import { AsyncIamge } from 'components/AsyncImage/AsyncImage';

interface IPostProps extends IPostModelProps {
  title?: string;
  body?: string;
}

export const Post = () => {
  const id = new URLSearchParams(location.search).get('id');
  const { data, $save, getPostWithImage } = usePostsModel([`postDetails-${id}`], `/${id}`);
  const post: IPostProps = (Array.isArray(data) ? data[0] : data) || ({ title: '', body: '' } as IPostProps);
  const [value, setValue] = useState('');
  const navigate = useNavigate();
  const onSave = () => {
    $save(value);
  };

  return (
    <div className="post-container">
      <div className="post-card">
        <div className={'readMore'} onClick={() => navigate('/')}>
          <span>Back</span>
        </div>
        <div className="post-header">
          <Heading variant="H4">{post?.title}</Heading>
          <div className="post-metadata">
            <span className="post-id">Post #{id}</span>
            <span className="post-date">{new Date().toLocaleDateString()}</span>
          </div>
        </div>

        <AsyncIamge height={338} width={704} src={getPostWithImage(post || {}).img} />

        <div className="post-content">
          <Paragraph variant="Regular">{post?.body}</Paragraph>
        </div>

        <div className="post-interaction">
          <div className="input-group">
            <input
              placeholder="Add your thoughts..."
              onChange={(e) => setValue(e.target.value)}
              value={value}
              className="post-input"
            />
            <Button variant="Primary" size="Medium" onClick={onSave} disabled={!value.trim()}>
              Save
            </Button>
          </div>
        </div>
      </div>

      <div className="comments-section">
        <Heading variant="H4">Comments</Heading>
        <Comments postId={id || ''} />
      </div>
    </div>
  );
};
