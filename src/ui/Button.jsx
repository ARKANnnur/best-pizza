import { Link } from 'react-router-dom';

function Button({
  children,
  disabled,
  to,
  type,
  size,
  padding,
  custom,
  onClick,
}) {
  const base = !size ? 'text-base sm:text-xl md:text-2xl' : size;

  const styles = {
    primary: 'bg-primary text-light',
    primary2: 'bg-primary2 text-light',
    secondaryWhite: 'bg-secondary text-light',  
    secondaryYellow: 'bg-secondary text-secondary2',
    secondary2Red: 'bg-secondary2 text-secondary',
    secondary2Dark: 'bg-secondary2 text-dark2',
    dark: 'bg-dark3 text-light',
  };

  const wide = {
    small: 'p-2 md:p-3 xl:p-4',
    medium: 'py-2 px-5',
    large: 'py-2 px-10',
  };

  if (to)
    return (
      <Link
        to={to}
        className={`${styles[type]} ${wide[padding]} ${base} ${custom}`}
      >
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button
        disabled={disabled}
        className={`${styles[type]} ${wide[padding]} ${base} ${custom}`}
        onClick={onClick}
      >
        {children}
      </button>
    );

  return (
    <button
      disabled={disabled}
      className={`${styles[type]} ${wide[padding]} ${base} ${custom}`}
    >
      {children}
    </button>
  );
}

export default Button;
