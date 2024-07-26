import { Link, useLocation } from 'react-router-dom';
import Username from '../features/user/Username';
import SearchOrder from '../features/order/SearchOrder';

function Header() {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <div className=" flex h-16 items-center justify-between px-5 lg:px-10">
      <Link
        to="/"
        className="text-yellow-300 text-center text-lg font-semibold lg:text-2xl"
      >
        <span className="text-primary">Best</span>{' '}
        <span className="text-secondary2">Pizza</span>
      </Link>
      <div className="flex items-center gap-5">
        <Username />
        {location.pathname !== '/' && <SearchOrder />}
      </div>
    </div>
  );
}

export default Header;