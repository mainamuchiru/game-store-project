function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="container mt-4 mb-4">
      <form className="d-flex" onSubmit={(e) => e.preventDefault()}>
        <input
          type="search"
          className="form-control me-2"
          placeholder="Search games..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
        <button type="button" className="btn btn-primary">
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;