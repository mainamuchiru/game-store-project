import { useEffect } from "react";
import useProducts from "../hooks/useProducts";
import useFilteredProducts from "../hooks/useFilteredProducts";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";

function Products() {
    useEffect(() => {
    document.title = "Products | View Products";
  }, []);
  const { products } = useProducts();
  const { searchTerm, setSearchTerm, filteredProducts } = useFilteredProducts(products);
  useEffect(() => {
    document.title = "Products | View Products";
  }, []);


  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Games</h1>
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <div className="row">
        {filteredProducts.map((game) => (
          <div className="col-lg-4 col-md-6 col-sm-12 mb-3" key={game.id}>
            <ProductCard game={game} mode="user" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;