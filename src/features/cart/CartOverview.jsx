import { useSelector } from 'react-redux';
import LinkButton from '../../ui/LinkButton';
import { getTotalPrice, getTotalQuantity } from './cartSlice';
import { formatCurrency } from '../../utils/helpers';

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalQuantity);
  const totalCartPrice = useSelector(getTotalPrice);

  if (!totalCartQuantity) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 flex h-[10dvh] items-center justify-between bg-dark2">
      <div className="flex h-full items-center text-base font-semibold tracking-wide sm:text-lg">
        <span className="flex h-full items-center bg-secondary2 px-2 text-secondary">
          {totalCartQuantity} pizzas{' '}
        </span>
        <span className="flex h-full items-center bg-secondary px-2 text-secondary2">
          {formatCurrency(totalCartPrice)}
        </span>
      </div>
      <LinkButton
        to="/cart"
        custom="h-full bg-primary p-4 text-base flex justify-center items-center text-light hover:bg-primary2 sm:text-xl md:text-2xl"
      >
       <span> Open cart &rarr;</span>
      </LinkButton> 
    </div>
  );
}

export default CartOverview;
