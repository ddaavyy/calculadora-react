import React from 'react';

export type ButtonType = 'number' | 'operation' | 'action';

export interface ButtonProps {
  type: ButtonType;
  label: string;
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({ type, label, onClick }) => {
  return (
    <button className={`${type} button`} onClick={onClick}>
      {label}
    </button>
  );
};
