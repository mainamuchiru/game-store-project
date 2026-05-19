import useProducts from "../hooks/useProducts";
import ProductCard from "../components/ProductCard";

function Products() {
  const { products } = useProducts();

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Games</h1>

      <div className="row">
        {products.map((game) => (
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={game.id}>
            <ProductCard game={game} mode="user" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;