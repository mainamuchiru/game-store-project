import { useNavigate } from "react-router-dom";

function ProductCard({ game, mode = "user", onDelete }) {
  const navigate = useNavigate();

  return (
    <div className="card h-100 shadow" style={{ minHeight: "520px" }}>
      <img
        src={game.imageurl || game.image}
        style={{ height: "220px", width: "100%", objectFit: "cover" }}
        alt={game.name}
      />

      <div className="card-body d-flex flex-column">
        <h5 className="fw-bold">{game.name}</h5>

        {/* Genre */}
        <p className="mb-1">
          <strong>Genre:</strong>{" "}
          {Array.isArray(game.gamegenre)
            ? game.gamegenre.join(", ")
            : game.gamegenre}
        </p>

        {/* Description */}
        <div className="bg-light p-2 rounded mb-2">
          <small className="text-muted">
            <strong>Description:</strong>
          </small>
          <p className="small text-muted mb-0">
            {game.description?.length > 90
              ? game.description.slice(0, 90) + "..."
              : game.description}
          </p>
        </div>

        {/* Platform */}
        <p className="mb-1">
          <strong>Platform:</strong>{" "}
          {Array.isArray(game.platform)
            ? game.platform.join(", ")
            : game.platform}
        </p>

        {/* Release Year */}
        <p className="mb-2">
          <strong>Released:</strong> {game.releasedate}
        </p>

        {/* Price */}
        <h6 className="text-primary fw-bold">KES {game.price}</h6>

        {/* USER VIEW */}
        {mode === "user" && (
          <a
            href={game.learnmore}
            className="btn btn-primary w-100 mt-auto"
            target="_blank"
            rel="noreferrer"
          >
            Learn More
          </a>
        )}

        {/* ADMIN VIEW */}
        {mode === "admin" && (
          <div className="mt-auto">
            <a
              href={game.learnmore}
              className="btn btn-primary w-100 mb-2"
              target="_blank"
              rel="noreferrer"
            >
              Learn More
            </a>
            <div className="d-flex gap-2">
              <button
                className="btn btn-warning w-50"
                onClick={() => navigate(`/adminpanel/editgame/${game.id}`)}
              >
                Edit
              </button>
              <button
                className="btn btn-danger w-50"
                onClick={() => onDelete(game.id)}
              >
                Delete
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductCard;