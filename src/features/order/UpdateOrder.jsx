import { useFetcher } from 'react-router-dom';
import Button from '../../ui/Button';
import { updateOrder } from '../../services/apiRestaurant';

function UpdateOrder({ order }) {
  const fetch = useFetcher();

  return (
    <fetch.Form method="PATCH" className="text-right">
      <Button type="secondary2Dark" padding="small">
        Make Priority
      </Button>
    </fetch.Form>
  );
}

export async function Action({ request, params }) {
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  console.log('update', request, params);

  return null;
}

export default UpdateOrder;
