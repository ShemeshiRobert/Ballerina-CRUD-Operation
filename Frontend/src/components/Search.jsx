  import React,{useState} from "react";
  import Result from './Result.jsx';
  import CreateUser from './CreateUser.jsx';
  function Search() {

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState(false);
  const [createUser, setCreateUser] = useState(false);

  function handleSearch(event){
    setSearchTerm(event.target.value);
    setSearchResults(false); 
  };

  function handleSearchButtonClick() {
    setSearchResults(true);
  };

  function handleCreateUserButtonClick() {
    setCreateUser(true);
  };

  return (
    <div className="search-container">
      <input className="search-bar"
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search"
      />
      <span className="search-button">
        <button onClick={handleSearchButtonClick}>🔍</button>
      </span>
      <span className="create-user-button">
        <button onClick={handleCreateUserButtonClick}>➕ Create User</button>
      </span>

      {/* //js comment */}
      {createUser && <CreateUser closeCreateUser={setCreateUser}/>}
      {searchResults && <Result searchTerm={searchTerm} />}     
    </div>
  );
}
export default Search;