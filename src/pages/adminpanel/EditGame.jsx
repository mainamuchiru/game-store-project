import useProducts from "../../hooks/useProducts";
import ProductCard from "../../components/ProductCard";

function EditGame() {
  const { products, removeProduct } = useProducts(); 

  async function handleDelete(id) {
    if (window.confirm("Are you sure you want to delete this game?")) {
      await removeProduct(id);
    }
  }

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Edit Games</h2>
      <div className="row">
        {products.map((game) => (
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={game.id}>
            <ProductCard
              game={game}
              mode="admin"
              onDelete={handleDelete}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default EditGame;