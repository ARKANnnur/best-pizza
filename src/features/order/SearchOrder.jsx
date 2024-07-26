import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchOrder() {
  const [query, setQuery] = useState();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery('');
  }

  return (
    <form onSubmit={handleSubmit} className="order-1 lg:order-2">
      <input
        className="w-44 border-b border-light bg-dark pb-1 text-light outline-none placeholder:text-light focus:border-b-2 focus:placeholder:text-opacity-25 md:w-auto"
        type="text"
        placeholder="Seacrh order by id"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}

export default SearchOrder;
