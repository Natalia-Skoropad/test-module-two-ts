import clsx from 'clsx';
import css from './Button.module.css';

export default Button;

// ================================================================

interface ButtonProps {
  variant?: 'normal' | 'reset';
  text: string;
  type?: 'submit' | 'button';
  onClick?: () => void;
  disabled?: boolean;
}

function Button({
  variant = 'normal',
  text,
  type = 'button',
  onClick,
  disabled,
}: ButtonProps) {
  return (
    <button
      className={clsx(css.button, variant && css[variant])}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
