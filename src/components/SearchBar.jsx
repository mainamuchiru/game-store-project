function SearchBar() {
  return (
    <div className="container mt-4">
      <form className="d-flex">
        <input
          type="search"
          className="form-control me-2"
          placeholder="Search games..."
        />

        <button
          type="submit"
          className="btn btn-primary"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;