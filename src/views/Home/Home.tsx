import React from 'react';
import style from './Home.module.scss';

const Home: React.FC = () => {
  return (
    <div className={style.HomeContainer}>
      <h1>
        <strong>Home</strong>
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper eros nisi, at pellentesque erat rutrum
        et. In at sagittis tellus. In accumsan euismod tortor, vitae lacinia tellus mattis in. Duis imperdiet suscipit
        semper. Morbi lacus nibh, imperdiet sit amet consequat et, posuere id diam. Suspendisse blandit, diam ac
        sagittis sagittis, mi lorem aliquam urna, a mollis massa arcu id neque. Aliquam erat volutpat. Vivamus sodales
        dolor justo, eget sagittis libero pretium nec. Aenean vel nunc nec mauris imperdiet rhoncus et non felis. Orci
        varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In elementum purus sit amet
        tempor finibus.
      </p>
    </div>
  );
};

export default Home;
