import React, { useEffect, useState } from 'react';
import style from './Home.module.scss';
import { IPostProps, queryOptions, usePostsModel } from 'models/usePostsModel';
import { Link } from 'react-router-dom';
import { Heading } from 'components/Heading/Heading';
import { Paragraph } from 'components/Paragraph/Paragraph';
import { InfiniteScroll } from 'components/InfiniteScroll/InfiniteScroll';
import './home.scss';
import { AsyncIamge } from 'components/AsyncImage/AsyncImage';

const Home: React.FC = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, refetch } = usePostsModel([], `?_page=${page}&_limit=10`, queryOptions);
  const [allPosts, setAllPosts] = useState<IPostProps[]>([]);
  const [value, setValue] = useState('');

  useEffect(() => {
    if (data?.length) {
      setAllPosts((prev) => [...prev, ...data].filter((x) => x) as IPostProps[]);
    }
  }, [data]);
  console.log('>> data', data);
  const onValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className={style.homeContainer}>
      <header className={style.header}>
        <Heading style={{ color: 'white' }} variant="H2">
          Latest Posts
        </Heading>
        <Paragraph variant="Regular" className={style.subtitle}>
          Explore our collection of interesting articles
        </Paragraph>
      </header>

      <div className="post-interaction">
        <div className="input-group">
          <input placeholder="Search..." onChange={onValueChange} value={value} className="post-input" />
        </div>
      </div>

      <InfiniteScroll
        options={queryOptions}
        setData={setAllPosts}
        queyKey={['posts']}
        page={page}
        setPage={setPage}
        refetch={refetch}
      >
        <div className={style.postsGrid}>
          {allPosts?.map((post) => (
            <Link to={`/post?id=${post.id}`} key={post.id} className={style.postCard}>
              <article>
                <div className={style.postNumber}>#{post.id}</div>
                <AsyncIamge width={318} height={154} src={post?.img || ''} />
                <Heading variant="H4" className={style.postTitle}>
                  {post.title}
                </Heading>

                <Paragraph variant="Regular" className={style.postExcerpt}>
                  {post?.body?.slice(0, 120)}...
                </Paragraph>
                <div className={style.readMore}>
                  <span>Read More</span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </InfiniteScroll>
      {isLoading && <div className={style.loadingIndicator}>Loading more posts...</div>}
    </div>
  );
};

export default Home;
