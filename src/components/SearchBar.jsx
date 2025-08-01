import '../Styles/SearchBar.css';
function SearchBar() {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search for jobs..." />
      <div className="filter">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px"  viewBox="0 -960 960 960" width="30px" fill="#1f1f1f" ><path d="M520-600v-80h120v-160h80v160h120v80H520Zm120 480v-400h80v400h-80Zm-400 0v-160H120v-80h320v80H320v160h-80Zm0-320v-400h80v400h-80Z"/></svg>
      </div>
      <div className="button">
        <button>Find Jobs</button>
      </div>
    </div>
  );
}

export default SearchBar;