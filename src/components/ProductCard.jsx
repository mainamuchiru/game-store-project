function ProductCard({ game }) {
  return (
    <div
      className="card h-100 shadow"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <img
        src={
          game.image?.startsWith("blob:")
            ? game.image
            : game.imageurl ||
              game.image ||
              "https://images.unsplash.com/photo-1511512578047-dfb367046420"
        }
        alt="Product"
        style={{
          height: "200px",
          width: "100%",
          objectFit: "cover",
        }}
        onError={(e) => {
          e.target.src =
            "https://images.unsplash.com/photo-1511512578047-dfb367046420";
        }}
      />

      {/* Body */}
      <div
        className="card-body"
        style={{ flex: 1, display: "flex", flexDirection: "column" }}
      >
        <h5 className="card-title">{game.name}</h5>

        <p className="card-text">Genre: {game.gamegenre || "Not set"}</p>

        <h6 className="text-primary">Platform: {game.platform}</h6>

        <h6 className="text-primary">KES {game.price}</h6>

        {/* Push button to bottom */}
        <a
          href={game.learnmore}
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary w-100"
          style={{ marginTop: "auto" }}
        >
          Learn More
        </a>
      </div>
    </div>
  );
}

export default ProductCard;
