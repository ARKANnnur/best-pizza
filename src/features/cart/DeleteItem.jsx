import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { deleteItem } from './cartSlice';

function DeleteItem({ pizzaId, children }) {
  const dispatch = useDispatch();

  return (
    <Button
      type="secondaryWhite"
      custom="grow py-2 px-[27px] md:px-5 "
      onClick={() => dispatch(deleteItem(pizzaId))}
    >
      {children}
    </Button>
  );
}

export default DeleteItem;
