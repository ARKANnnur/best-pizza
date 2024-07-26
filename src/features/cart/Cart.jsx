import { useDispatch, useSelector } from 'react-redux';
import LinkButton from '../../ui/LinkButton';
import Button from '../../ui/Button';
import CartItem from './CartItem';
import EmptyCart from './EmptyCart';
import { clearCart, getCart } from './cartSlice';

function Cart() {
  const cart = useSelector(getCart);
  const { userName } = useSelector((storage) => storage.user);

  const dispatch = useDispatch();

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="mb-28 mt-12 flex justify-center">
      <div className="mx-5 h-auto w-[332px] sm:min-w-[750px] xl:min-w-[1300px] ">
        <LinkButton
          to="/menu"
          custom="text-light bg-dark2 border-b border-light py-2 px-5"
        >
          &larr; Back to menu
        </LinkButton>

        <div className="mt-2 bg-dark2 p-5 text-base text-light sm:text-xl md:text-2xl">
          <h2 className="text-primary">
            Your cart, <span className="text-secondary2">{userName}</span>
          </h2>
          <ul>
            {cart.map((item) => (
              <CartItem item={item} key={item.pizzaId} />
            ))}
          </ul>

          <div className="flex gap-5">
            <Button
              to="/order/new"
              type="secondary2Dark"
              custom="lg:py-1 lg:px-5 py-2 px-5 text-center"
              size="text-base sm:text-xl md:text-2xl"
            >
              Order pizzas
            </Button>
            <Button
              type="dark"
              custom="lg:py-1 lg:px-5 text-center py-2 px-5"
              size="text-base sm:text-xl md:text-2xl"
              onClick={() => dispatch(clearCart())}
            >
              Clear cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
