import { useSelector } from 'react-redux';

function Username() {
  const { userName } = useSelector((storage) => storage.user);

  if (!userName) return null;

  return (
    <div className="order-2 hidden font-semibold text-secondary2 sm:block lg:order-1">
      {userName}
    </div>
  );
}

export default Username;
