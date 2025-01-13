import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export interface IButton extends ButtonProps {
  variant: 'Primary' | 'Secondary' | 'Tertiary';
  size: 'Large' | 'Medium' | 'Small';
  disabled: boolean;
  className?: string;
  children: React.ReactNode;
}
