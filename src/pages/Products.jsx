import useProducts from "../hooks/useProducts";
import ProductCard from "../components/ProductCard";

function Products() {
  const { products } = useProducts();

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Games</h1>

      <div className="row">
        {products.map((game) => (
          <div
            key={game.id}
            className="col-12 col-sm-12 col-md-6 col-lg-4 mb-4"
          >
            <ProductCard game={game} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;