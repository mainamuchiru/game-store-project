import { useEffect } from "react";
import useProducts from "../../hooks/useProducts";
import useFilteredProducts from "../../hooks/useFilteredProducts";
import ProductCard from "../../components/ProductCard";
import SearchBar from "../../components/SearchBar";

function EditGame() {
useEffect(() => {
    document.title = "Admin | View Games";
  }, []);


  const { products, removeProduct } = useProducts();
  const { searchTerm, setSearchTerm, filteredProducts } = useFilteredProducts(products);

  async function handleDelete(id) {
    if (window.confirm("Are you sure you want to delete this game?")) {
      await removeProduct(id);
    }
  }

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Edit Games</h2>
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <div className="row">
        {filteredProducts.map((game) => (
          <div className="col-lg-3 col-md-6 col-sm-12 mb-4" key={game.id}>
            <ProductCard game={game} mode="admin" onDelete={handleDelete} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default EditGame;