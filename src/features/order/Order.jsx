// Test ID: IIDSAT

import { useFetcher, useLoaderData } from 'react-router-dom';
import { getOrder } from '../../services/apiRestaurant';
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from '../../utils/helpers';
import OrderItem from './OrderItem';
import { useEffect } from 'react';
import UpdateOrder from './UpdateOrder';

function Order() {
  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const order = useLoaderData();
  const fetch = useFetcher();

  useEffect(() => {
    if (!fetch.data && fetch.state === 'idle') return fetch.load('/menu');
  }, [fetch]);
  console.log(fetch.data);

  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;

  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="my-12 flex justify-center  text-base text-light sm:text-xl md:text-2xl xl:text-3xl">
      <div className="mx-5 h-auto w-[332px] sm:min-w-[750px] xl:min-w-[1200px]">
        <div className="flex flex-wrap items-center justify-between">
          <h2>
            Order <span className="text-primary">#{id}</span> Status
          </h2>
          <div className="flex justify-center gap-5 text-center">
            {priority && (
              <span className="bg-secondary p-1 text-secondary2 lg:p-3">
                Priority
              </span>
            )}
            <span className="bg-secondary2 p-1 text-secondary lg:p-3">
              {status} order
            </span>
          </div>
        </div>

        <div className="my-5 flex items-center justify-between bg-dark2 p-5">
          <p>
            {deliveryIn >= 0
              ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
              : 'Order should have arrived'}
          </p>
          <p className="text-slate-500 text-sm">
            (Estimated delivery: {formatDate(estimatedDelivery)})
          </p>
        </div>

        <ul className="border-b border-light">
          {cart.map((item) => (
            <OrderItem
              item={item}
              key={item.pizzaId}
              isLoadingIngredients={fetch.state === 'loading'}
              ingredients={
                fetch?.data?.find((el) => el.id === item.pizzaId)
                  ?.ingredients ?? []
              }
            />
          ))}
        </ul>

        <div className="my-5 bg-dark2 p-5">
          <p className="text-base sm:text-lg md:text-xl xl:text-2xl">
            Price pizza: {formatCurrency(orderPrice)}
          </p>
          {priority && (
            <p className="text-base sm:text-lg md:text-xl xl:text-2xl">
              Price priority: {formatCurrency(priorityPrice)}
            </p>
          )}
          <p className="text-primary2">
            To pay on delivery:{' '}
            <span className="text-secondary2">
              {formatCurrency(orderPrice + priorityPrice)}
            </span>
          </p>
        </div>
        {!priority && <UpdateOrder />}
      </div>
    </div>
  );
}

export async function Loader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}

export default Order;
