import React from 'react';
import './asyncImage.scss';
interface IAsyncImageProps {
  src: string;
  loader?: React.ReactNode;
  placeHolderImage?: string;
  width?: string | number;
  height?: string | number;
}

export const AsyncIamge = (props: IAsyncImageProps) => {
  const [image, setImage] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(true);
  const canvasRef = React.useRef({} as HTMLCanvasElement);

  React.useEffect(() => {
    const fetchImage = async () => {
      const img = new Image();
      img.src = props.src;
      img.alt = 'Random Image';
      img.style.width = '100%'; // Optional styling
      img.onload = (e) => {
        console.log('>> e', e);
        setImage(props.src);
        setLoading(false);
      };
      img.onerror = (err: any) => {
        console.log('>> err', err);
        setLoading(false);
      };
    };
    fetchImage();
  }, [props.src]);

  return (
    <>
      <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
      {loading &&
        (props.loader || <div style={{ width: props.width, height: props.height }} className="shimmer"></div>)}
      {image && (
        <img
          className="async-img"
          id={props.src}
          src={image}
          alt="async"
          style={{ width: props.width, height: props.height }}
        />
      )}
    </>
  );
};
