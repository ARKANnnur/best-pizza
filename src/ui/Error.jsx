import { useRouteError } from 'react-router-dom';
import LinkButton from './LinkButton';

function Error() {
  const error = useRouteError();
  console.log(error);

  return (
    <div className="flex h-screen items-center justify-center text-light">
      <div className="text-center">
        <h1 className="text-2xl font-semibold">Something went wrong 😢</h1>
        <p className="mb-5 text-lg font-thin text-red-600">
          {error.data || error.message}
        </p>
        <LinkButton to="-1">&larr; Go back</LinkButton>
      </div>
    </div>
  );
}

export default Error;
