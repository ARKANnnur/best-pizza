import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { decreaseItemQUantity, increaseItemQuantity } from './cartSlice';

function UpdateItemQuantity({ children, pizzaId }) {
  const dispatc = useDispatch();

  return (
    <div className="bg-primary2 flex gap-5 items-center py-2 px-5">
      <Button
        type="primary2"
        onClick={() => dispatc(decreaseItemQUantity(pizzaId))}
      >
        -
      </Button>
      {children}
      <Button
        type="primary2"
        onClick={() => dispatc(increaseItemQuantity(pizzaId))}
      >
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
