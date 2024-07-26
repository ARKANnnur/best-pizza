import { useDispatch, useSelector } from 'react-redux';
import Button from '../../ui/Button';
import { formatCurrency } from '../../utils/helpers';
import { addItem, getCurrentQuantityById } from '../cart/cartSlice';
import DeleteItem from '../cart/DeleteItem';
import UpdateItemQuantity from '../cart/UpdateItemQuantity';

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const currentQuantity = useSelector(getCurrentQuantityById(id));

  const dispatch = useDispatch();

  function handleSubmit() {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice,
    };
    dispatch(addItem(newItem));
  }

  return (
    <li
      className={`blurbox flex h-[300px] w-[400px] list-none shadow-xl ${
        soldOut ? 'opacity-70 grayscale' : ''
      }`}
    >
      <div className="h-full w-1/2">
        <img src={imageUrl} alt={name} className=" h-full" />
      </div>
      <div className="relative h-full w-1/2 border border-b-0 border-l-0 border-light">
        <h2 className="w-full border-b border-light p-2 text-primary">
          {name}
        </h2>
        <ul className="p-2 text-light">
          {ingredients.map((ingrident) => (
            <li key={ingrident}>-{ingrident}</li>
          ))}
        </ul>
        <div className="absolute bottom-0 w-full">
          <div className="flex overflow-hidden text-light">
            {!soldOut ? (
              <>
                {currentQuantity > 0 && (
                  <>
                    <div className="w-2/3">
                      <UpdateItemQuantity pizzaId={id}>
                        <p>{currentQuantity}</p>
                      </UpdateItemQuantity>
                    </div>
                    <div className="w-1/3">
                      <DeleteItem pizzaId={id}>x</DeleteItem>
                    </div>
                  </>
                )}
              </>
            ) : (
              <p className="flex w-full justify-center px-2">Sold out</p>
            )}
          </div>
          {!currentQuantity && (
            <Button
              type="secondary2Red"
              padding="large"
              size="text-base sm:text-xl w-full"
              onClick={handleSubmit}
            >
              {formatCurrency(unitPrice)}
            </Button>
          )}
        </div>
        {/* <div className="grow p-2">
          <p className="font-semibold">{name}</p>
          <p className="font-default text-sm">{ingredients.join(', ')}</p>
          <div className="font-semibold">
            {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p>Sold out</p>}
          </div>
        </div>
        <div className="flex h-[auto] items-end justify-end p-2">
          {!soldOut && (
            <>
              {!currentQuantity ? (
                <Button
                  type="secondary2Red"
                  padding="large"
                  size="text-base sm:text-xl"
                  onClick={handleSubmit}
                >
                  {formatCurrency(unitPrice)}
                </Button>
              ) : (
                <>
                  <UpdateItemQuantity pizzaId={id}>
                    {currentQuantity}
                  </UpdateItemQuantity>
                  <DeleteItem pizzaId={id} />
                </>
              )}
            </>
          )}
        </div> */}
      </div>
    </li>
  );
}

export default MenuItem;
