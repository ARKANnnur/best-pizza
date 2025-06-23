import { useSelector } from 'react-redux';
import CreateUser from '../features/user/CreateUser.jsx';
import Button from './Button.jsx';

function Home() {
  const { userName } = useSelector((storage) => storage.user);

  return (
    <>
      <img
        src="/home.png"
        alt=""
        className="absolute -top-16 -z-10 h-[100dvh] w-[100dvw] opacity-70 hue-rotate-30"
      />
      <div className="fixed top-[30%] z-10 flex w-full flex-col items-center justify-center  text-base text-light sm:text-xl md:text-2xl xl:text-[32px]">
        <h1 className="text-orange-600 mx-5 text-center font-semibold">
          The best <span className="text-secondary2">pizza.</span>
          <br />
          <span className="text-light">
            Straight out of the oven, straight to you.
          </span>
        </h1>

        {Boolean(userName) ? (
          <Button
            type="secondary2Dark"
            padding="small"
            to="/menu"
            custom="text-center my-5 relative before:content-[''] before:absolute before:inset-0 before:outline before:outline-4 before:outline-[#fff] 
          before:outline-offset-4 before:transition-transform before:duration-300
          before:translate-x-8 before:translate-y-3 before:-z-10 before:scale-90 transition-transform duration-300 hover:before:translate-x-0 hover:before:translate-y-0 hover:before:scale-100"
          >
            Continue Ordering
            <span> {userName}</span>
          </Button>
        ) : (
          <CreateUser />
        )}
      </div>
    </>
  );
}

export default Home;
