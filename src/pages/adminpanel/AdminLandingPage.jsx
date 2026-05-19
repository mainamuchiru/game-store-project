import useProducts from "../../hooks/useProducts";

function AdminLandingPage() {
  const { products } = useProducts();

  return (
   <div className="container mt-4">
  <div className="card shadow-sm p-4 text-center">

    <h1 className="mb-3 text-primary">
      Admin Overview
    </h1>

    <h2 className="text-dark">
      Number of games in store:
    </h2>

    <h1 className="display-4 text-success mt-2">
      {products.length}
    </h1>

  </div>
</div>
  );
}

export default AdminLandingPage;
