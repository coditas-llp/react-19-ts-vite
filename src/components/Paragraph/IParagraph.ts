import React from 'react';

type ParagraphProps = React.HTMLAttributes<HTMLParagraphElement>;

export interface IParagraph extends ParagraphProps {
  className?: string;
  variant?: 'Light' | 'Regular' | 'Medium' | 'Bold';
}
