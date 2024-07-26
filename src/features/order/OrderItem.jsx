import { formatCurrency } from '../../utils/helpers';

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="flex flex-wrap items-center justify-between overflow-auto p-5">
      <p>
        <span>{quantity}&times;</span> {name}
        <p className="text-base capitalize italic sm:text-lg md:text-xl xl:text-2xl">
          {isLoadingIngredients ? '...Loading' : ingredients.join(',')}
        </p>
      </p>
      <p className="text-secondary2">{formatCurrency(totalPrice)}</p>
    </li>
  );
}

export default OrderItem;
