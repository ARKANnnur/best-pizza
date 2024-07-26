import { useLoaderData } from 'react-router-dom';
import { getMenu } from '../../services/apiRestaurant';
import MenuItem from './MenuItem';

function Menu() {
  const menu = useLoaderData();

  return (
    <div className="mb-16 flex flex-col justify-center px-10 py-5 sm:mt-10">
      <div className="flex w-auto gap-5 border-b border-light">
        <h1 className="text-center text-2xl font-semibold text-light ">Menu</h1>
        <h1 className="text-center text-2xl font-semibold text-light ">
          Drink
        </h1>
      </div>
      <div className="mt-10 flex w-auto flex-wrap justify-center gap-5">
        {menu.map((pizza) => (
          <MenuItem pizza={pizza} key={pizza.id} />
        ))}
      </div>
    </div>
  );
}

export async function Loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
