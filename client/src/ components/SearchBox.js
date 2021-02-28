import {useState} from 'react';

const SearchBox = ({searchFlight}) => {
  const [search, setSearch] = useState("");


  const handleSearchChange = (ev) => setSearch(ev.target.value);


  const handleSubmit = ev => {
    ev.preventDefault();
    searchFlight({
      search,
    });
    setSearch("");
  }

  

  return (
    <>
    <form onSubmit={handleSubmit} id="search_form">
      <div className="search_container">
        <label htmlFor="search">Search</label>
        <input autofocus type="text" id="search_text" search="search" value={search} placeholder="word1. word2. word3" onChange={handleSearchChange}/>
      </div>
    </form>
    </>
  )
};

export default SearchBox;