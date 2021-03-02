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
    <div className="instructions transparent-box in-from-left">
      <h2>On the bright side, the sky is clear. On the other hand, there's nothing to see!</h2>
      <p>Unfortunately we couldn't find any flights in your area.</p>
      <p>Try searching again</p>
    </div>
    <form onSubmit={handleSubmit} id="search_form">
      <div className="search_container">
        <label className="search_label" htmlFor="search">Search</label>
        <input autoFocus type="text" id="search_text" search="search" value={search} placeholder="word1. word2. word3" onChange={handleSearchChange}/>
      </div>
    </form>
    </>
  )
};

export default SearchBox;