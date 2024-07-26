import { useState } from 'react';
import { Form, redirect, useActionData, useNavigation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { createOrder } from '../../services/apiRestaurant';
import { clearCart, getCart, getTotalPrice } from '../cart/cartSlice';
import EmpetyCart from '../cart/EmptyCart';

import store from '../../store';
import { formatCurrency } from '../../utils/helpers';

import { fetchAddress } from '../user/userSlice';
import Button from '../../ui/Button';

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false);

  const {
    userName,
    status: addressStatus,
    position,
    address,
    error: errorAddress,
  } = useSelector((storage) => storage.user);
  const isLoadingAddress = addressStatus === 'loading';

  const navigation = useNavigation();
  const isSubmiting = navigation.state === 'submitting';
  const formError = useActionData();

  const cart = useSelector(getCart);
  const totalCartPrice = useSelector(getTotalPrice);
  const priorityPrice = withPriority ? totalCartPrice * 0.2 : 0;
  const totalPrice = totalCartPrice + priorityPrice;
  const dispatch = useDispatch();

  if (!cart.length) return <EmpetyCart />;

  return (
    <div className="flex justify-center text-base text-light sm:text-xl lg:text-2xl">
      {addressStatus === 'error' && (
        <div className="animate-fadeIn fixed top-0  mt-10 h-auto w-1/2 bg-secondary p-5 text-center text-base text-light">
          {errorAddress}
        </div>
      )}
      {formError?.phone && (
        <div className="animate-fadeIn fixed top-0  mt-10 h-auto w-1/2 bg-secondary p-5 text-center text-base text-light">
          {formError.phone}
        </div>
      )}
      <div className="mx-2 mt-5 h-auto w-auto sm:mx-5 sm:w-[750px] md:mx-10 lg:w-[1300px]">
        <h2 className="w-fit border-b border-light bg-dark2 p-2 lg:px-5">
          Ready to order? Let's go!
        </h2>

        <Form method="POST" className="w-full bg-dark2 p-2 py-5 lg:px-5">
          <div className="mt-5 flex w-full items-center">
            <label className="w-1/3">First Name</label>
            <input
              type="text"
              name="customer"
              required
              className="input"
              defaultValue={userName}
            />
          </div>

          <div className="mt-5 flex w-full items-center">
            <label className="w-1/3">Phone number</label>
            <input type="tel" name="phone" required className="input" />
          </div>

          <div className="relative mt-5 flex w-full items-center">
            <label className="w-1/3">Address</label>
            <input
              type="text"
              name="address"
              required
              disabled={isLoadingAddress}
              defaultValue={address}
              className="input"
            />

            {!position.latitude && !position.longitude && (
              <Button
                type="primary"
                custom="text-base sm:text-xl lg:text-2xl absolute right-0 h-full px-2"
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(fetchAddress());
                }}
                disabled={isLoadingAddress}
              >
                Get Position
              </Button>
            )}
          </div>

          <div className="mt-5 flex w-full items-center">
            <div className="w-1/3"></div>
            <div className="flex w-full items-center">
              <input
                type="checkbox"
                name="priority"
                id="priority"
                value={withPriority}
                onChange={(e) => setWithPriority(e.target.checked)}
                disabled={isLoadingAddress}
                className="h-10 w-10 accent-dark3"
              />
              <label htmlFor="priority" className="mx-2">
                Want to yo give your order priority?
              </label>
            </div>
          </div>

          <div className="mt-5 flex">
            <div className="w-1/3">
              <input type="hidden" name="cart" value={JSON.stringify(cart)} />
              <input
                type="hidden"
                name="position"
                value={
                  position.latitude && position.longitude
                    ? `${position.latitude},${position.longitude}`
                    : ''
                }
              />
            </div>

            <div className="w-full">
              <Button
                disabled={isSubmiting || isLoadingAddress}
                type="secondary2Dark"
                padding="small"
              >
                {isSubmiting
                  ? 'Placing Order...'
                  : `Order now for ${formatCurrency(totalPrice)}`}
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
}

export async function Action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === 'true',
  };

  const error = {};
  if (!isValidPhone(order.phone))
    error.phone =
      'Please Give you correct phone number, we might need it to contact you';
  if (Object.keys(error).length > 0) return error;

  const newOrder = await createOrder(order);

  // Do not OverUse
  store.dispatch(clearCart());

  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
