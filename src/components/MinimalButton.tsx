import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';

type Props = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

const MinimalButton: FC<Props> = ({ children, onClick, style, ...props }) => {
  return (
    <button
      {...props}
      onClick={onClick}
      style={{ background: 'transparent', border: 0, cursor: 'pointer', margin: 8, ...style }}
    >
      {children}
    </button>
  );
};

export default MinimalButton;
