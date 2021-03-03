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
            <div className="main-logo in-from-top">
              <img src="http://localhost:3000/images/skyrabble_main.png"></img>
            </div>

    <div className="instructions-container">
      <div className="instructions transparent-box in-from-right">
        <h2>How to search</h2>
        <ol>
          <li>Head to    <div className="symbol"><a target="_blank" href="https://what3words.com/">///</a></div><a target="_blank" href="https://what3words.com/">what3words</a>.</li>
          <li>Find the 3 words for a location of your choice.</li>
          <li>Type them into the search box below using full stops in between.</li>
          <li>A list of flights in your location will appear.</li>
          <li>Click on the flight for more details.</li>
        </ol>
      </div>
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