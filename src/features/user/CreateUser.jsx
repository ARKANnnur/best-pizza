import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { updateName } from './userSlice';
import { useNavigate } from 'react-router-dom';

function CreateUser() {
  const [username, setUsername] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!username) return;
    dispatch(updateName(username));
    navigate('/menu');
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="my-5 text-center text-base font-medium tracking-wide text-light sm:text-xl md:text-2xl xl:text-[32px] "
    >
      <p>👋 Welcome! Please start by telling us your name:</p>

      <input
        className="border-b border-light bg-primary/20 p-2 text-center placeholder:text-light focus:border-b-2 focus:outline-none"
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      {username !== '' && (
        <div className="text-orange-600 mt-5 font-semibold">
          <Button type="secondary2Dark" padding="medium">
            Start ordering
          </Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
