import { useSelector } from 'react-redux';
import LinkButton from '../../ui/LinkButton';
import { getTotalPrice, getTotalQuantity } from './cartSlice';
import { formatCurrency } from '../../utils/helpers';

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalQuantity);
  const totalCartPrice = useSelector(getTotalPrice);

  if (!totalCartQuantity) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 flex h-16 items-center justify-between bg-dark2">
      <div className="flex h-16 items-center text-base font-semibold tracking-wide sm:text-lg">
        <span className="flex h-full items-center bg-secondary2 px-2 text-secondary">
          {totalCartQuantity} pizzas{' '}
        </span>
        <span className="flex h-full items-center bg-secondary px-2 text-secondary2">
          {formatCurrency(totalCartPrice)}
        </span>
      </div>
      <LinkButton
        to="/cart"
        custom="h-16 bg-primary p-4 text-base text-light hover:bg-primary2 sm:text-xl md:text-2xl"
      >
        Open cart &rarr;
      </LinkButton> 
    </div>
  );
}

export default CartOverview;
