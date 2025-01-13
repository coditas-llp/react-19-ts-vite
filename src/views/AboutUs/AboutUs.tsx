import React from 'react';
import style from './AboutUs.module.scss';

const AboutUs: React.FC = () => {
  return (
    <div className={style.AboutUsContainer}>
      <h1>
        <strong>About Us</strong>
      </h1>
      <p>
        Etiam pulvinar posuere arcu, vitae interdum odio rutrum sed. Sed dapibus orci lacus, sit amet tristique nibh
        elementum sed. Etiam viverra bibendum mi eget elementum. Sed maximus leo nulla. Nullam feugiat, tellus at
        commodo rhoncus, neque dolor lacinia sem, et luctus odio nunc at mi. Phasellus ac lectus eu quam dapibus
        accumsan. Nullam efficitur purus mi. Proin id orci pretium mi rutrum ultricies. Curabitur et leo et tellus
        faucibus varius ac eget tortor. Ut eget nunc nulla. Phasellus congue porttitor libero. Curabitur cursus ex
        euismod mollis convallis. Proin luctus leo at ligula molestie, sed pulvinar quam convallis. Suspendisse in
        sapien magna. Donec laoreet ante sed rutrum facilisis.
      </p>
    </div>
  );
};

export default AboutUs;
