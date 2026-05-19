import { GAME_GENRES, PLATFORMS } from "../constants/gameOptions";

function ProductForm({
  products,
  handleSubmit,
  handleChange,
  headerTitle,
  buttonText,
}) {
  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div
        className="card shadow p-4"
        style={{ width: "100%", maxWidth: "700px", borderRadius: "12px" }}
      >
        <h2 className="text-center mb-4">{headerTitle || "Game Form"}</h2>

        <form onSubmit={handleSubmit}>
          {/* NAME */}
          <input
            name="name"
            className="form-control mb-3"
            placeholder="Game name"
            value={products.name || ""}
            onChange={handleChange}
            required
          />

          {/* DESCRIPTION */}
          <textarea
            name="description"
            className="form-control mb-3"
            placeholder="Description"
            value={products.description || ""}
            onChange={handleChange}
          />
          <select
            name="releasedate"
            className="form-select mb-3"
            value={products.releasedate || ""}
            onChange={handleChange}
          >
            <option value="">Year Released</option>
            {Array.from({ length: 50 }, (_, i) => {
              const year = new Date().getFullYear() - i;
              return (
                <option key={year} value={year}>
                  {year}
                </option>
              );
            })}
          </select>
          {/* GENRE */}
          <label className="form-label">
            Genres (Hold Ctrl/Cmd to select multiple)
          </label>
          <select
            name="gamegenre"
            className="form-select mb-3"
            multiple
            value={products.gamegenre || []}
            onChange={handleChange}
          >
            {GAME_GENRES.map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>

          {/* PLATFORM */}
          <label className="form-label">
            Platforms (Hold Ctrl/Cmd to select multiple)
          </label>
          <select
            name="platform"
            className="form-select mb-3"
            multiple
            value={products.platform || []}
            onChange={handleChange}
            required
          >
            {PLATFORMS.map((platform) => (
              <option key={platform} value={platform}>
                {platform}
              </option>
            ))}
          </select>

          {/* IMAGE */}
          <input
            type="file"
            name="image"
            className="form-control mb-3"
            onChange={handleChange}
          />

          {/* URL */}
          <input
            name="imageurl"
            className="form-control mb-3"
            placeholder="Image URL"
            value={products.imageurl || ""}
            onChange={handleChange}
          />

          {/* PRICE */}
          <input
            name="price"
            type="number"
            className="form-control mb-3"
            placeholder="Price"
            value={products.price || ""}
            onChange={handleChange}
            required
          />

          {/* LEARN MORE */}
          <input
            name="learnmore"
            className="form-control mb-3"
            placeholder="Learn more link"
            value={products.learnmore || ""}
            onChange={handleChange}
          />

          <button className="btn btn-primary w-100">{buttonText}</button>
        </form>
      </div>
    </div>
  );
}

export default ProductForm;
