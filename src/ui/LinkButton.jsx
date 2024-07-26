import { Link, useNavigate } from 'react-router-dom';

function LinkButton({ children, to, custom }) {
  const base = !custom
    ? 'bg-primary p-4 text-base text-light hover:bg-primary2 sm:text-xl md:text-2xl'
    : '';
  const navigate = useNavigate();
  if (to === '-1') {
    return (
      <button onClick={() => navigate(-1)} className={base}>
        {children}
      </button>
    );
  }
  return (
    <Link to={to} className={`${custom} ${base}`}>
      {children}
    </Link>
  );
}

export default LinkButton;
