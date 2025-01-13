import React from 'react';

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement>;

export interface IHeading extends HeadingProps {
  className?: string;
  variant: 'H1' | 'H2' | 'H3' | 'H4' | 'H5';
}
