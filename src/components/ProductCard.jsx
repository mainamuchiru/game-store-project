function ProductCard() {
  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="card" style={{ width: "22rem" }}>
        <img
          src="https://images.unsplash.com/photo-1511512578047-dfb367046420"
          className="card-img-top"
          alt="Product"
          style={{ width: "22rem" }}
        />

        <div className="card-body">
          <h5 className="card-title">Mass Effect</h5>

          <p className="card-text">Genre: Sci-fi Action open world game</p>
          <a href="https://www.ea.com/games/mass-effect"> Learn more </a>
          <h4 className="text-primary">Platform: PC, XBOX, PS4 </h4>
          <h4 className="text-primary">KES 8,000</h4>

          <button className="btn btn-primary w-100">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
