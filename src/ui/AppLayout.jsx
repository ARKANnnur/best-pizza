import { Outlet, useNavigation } from 'react-router-dom';
import CartOverview from '../features/cart/CartOverview';
import Header from './Header';
import Loader from './Loader';

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  return (
    <div className="static">
      {isLoading && <Loader />}
      <Header />

      <main className='relative'>
        <Outlet />
      </main>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
