import { formatCurrency } from '../../utils/helpers';
import UpdateItemQuantity from './UpdateItemQuantity';
import DeleteItem from './DeleteItem';

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="border-slate-950 my-5 flex items-center justify-between border-b">
      <div className="flex items-center justify-between lg:grow flex-col lg:flex-row">
        <p>
          {quantity}&times; {name}
        </p>
        <p className="mr-5">{formatCurrency(totalPrice)}</p>
      </div>
      <div className="flex items-center flex-col lg:flex-row">
        <UpdateItemQuantity pizzaId={pizzaId}>{quantity}</UpdateItemQuantity>
        <DeleteItem pizzaId={pizzaId}>Delete</DeleteItem>
      </div>
    </li>
  );
}

export default CartItem;
