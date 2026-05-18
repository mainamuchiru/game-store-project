

function ProductForm() {
  return (
    <div className="container mt-5 d-flex justify-content-center">
       <div
        className="card shadow p-4"
        style={{
          width: "100%",
          maxWidth: "700px",
          borderRadius: "12px",
        }}
      >

        <h2 className="text-center mb-4">Add New Game</h2>

        <form>

          {/* Name of Game */}
          <div className="mb-3">
            <label className="form-label">Name of Game</label>

            <input
              type="text"
              className="form-control"
              placeholder="Enter game name"
            />
          </div>

          {/* Game Description */}
          <div className="mb-3">
            <label className="form-label">Game Description</label>

            <textarea
              className="form-control"
              rows="4"
              placeholder="Enter game description"
            ></textarea>
          </div>

          {/* Release Date */}
          <div className="mb-3">
            <label className="form-label">Release Date</label>

            <input
              type="date"
              className="form-control"
            />
          </div>

          {/* Game Genre */}
          <div className="mb-3">
            <label className="form-label">Game Genre</label>

            <select className="form-select" multiple>
              <option>Action</option>
              <option>Adventure</option>
              <option>RPG</option>
              <option>Sports</option>
              <option>Racing</option>
              <option>Horror</option>
              <option>Simulation</option>
              <option>Fighting</option>
              <option>Open World</option>
              <option>Strategy</option>
            </select>
          </div>

          {/* Platform */}
          <div className="mb-3">
            <label className="form-label">Platform</label>

            <select className="form-select" multiple>
              <option>PC</option>
              <option>PS4</option>
              <option>PS5</option>
              <option>XBOX One</option>
              <option>XBOX Series X</option>
              <option>Nintendo Switch</option>
            </select>
          </div>

          {/* Upload Image */}
          <div className="mb-3">
            <label className="form-label">Upload Image</label>

            <input
              type="file"
              className="form-control"
              accept="image/*"
            />
          </div>

          {/* Image URL */}
          <div className="mb-3">
            <label className="form-label">Or Add Image URL</label>

            <input
              type="text"
              className="form-control"
              placeholder="Paste image URL"
            />
          </div>

          {/* Price */}
          <div className="mb-3">
            <label className="form-label">Price</label>

            <input
              type="number"
              className="form-control"
              placeholder="Enter game price"
            />
          </div>

          {/* Learn More URL */}
          <div className="mb-4">
            <label className="form-label">Learn More</label>

            <input
              type="url"
              className="form-control"
              placeholder="https://example.com"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn btn-primary w-100"
          >
            Add Game
          </button>

        </form>
      </div>
    </div>
  );
}

export default ProductForm;